import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import GPTCard from "../components/GPTCard";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function Dashboard() {
  const navigate = useNavigate();
const API_URL =
import.meta.env.VITE_API_URL;
  const [showModal, setShowModal] = useState(false);

const [name, setName] = useState("");
const [institutionType, setInstitutionType] = useState("");
const [description, setDescription] = useState("");
const [gpts, setgpts] = useState([]);

const [documentCount, setDocumentCount] = useState(0);
  const token=localStorage.getItem("token")

   if(token){
    navigate('/dashboard');
   }

useEffect(()=>{

   fetchGPTs();
},[]);

useEffect(()=>{
   console.log(gpts);
},[gpts]);

   const fetchGPTs = async()=>{
   const res = await axios.get(`${API_URL}/gpts`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
   console.log(res.data);
   setgpts(res.data);
}

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/");
};

const handleDelete = async(id)=>{

    const ok = window.confirm(
        "Delete this GPT?"
    );

    if(!ok) return;

    try{

        await axios.delete(

            `${API_URL}/gpts/${id}`,

            {
                headers:{
                    Authorization:
                    `Bearer ${localStorage.getItem("token")}`
                }
            }

        );

        fetchGPTs();

    }
    catch(error){

        console.log(error);

    }

};

const handleCreateGPT = async () => {

  try{


 

    const response =
    await axios.post(

      `${API_URL}/gpts`,

      {
        name:name,
        institutionType:institutionType,
        description:description
      },

      {
        headers:{
          Authorization:
          `Bearer ${
            localStorage.getItem("token")
          }`
        }
      }

    );
    console.log(response.data);
setShowModal(false);
await fetchGPTs();

  }
  catch(error){

    console.log("error"+error);

  }

};
 
 

  return (
    <div className="flex min-h-screen bg-[#0B1020]">

      <Sidebar />

      <main className="flex-1 p-8">
        <div className='flex justify-between'>

        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>
        <button
  onClick={handleLogout}
  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
>
  Logout
</button>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

          <StatCard
  title="Total GPTs"
  value={gpts.length}
/>
      <StatCard
  title="Documents"
  value={documentCount}
/>
       <StatCard
  title="Chats"
  value="--"
/>
          <StatCard
  title="Storage"
  value="--"
/>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {gpts.map((gpt, index) => (
           <GPTCard
  key={gpt._id}
  id={gpt._id}
  name={gpt.name}
  type={gpt.institutionType}
  docs={gpt.docs}
  chats={gpt.chats}
  description={gpt.description}
    handleDelete={handleDelete}
/>
          ))}
          

        </div>


        

      </main>

      {showModal && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

    <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 w-full max-w-lg">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-white">
          Create New GPT
        </h2>

        <button
          onClick={() => setShowModal(false)}
          className="text-slate-400 hover:text-white"
        >
          ✕
        </button>

      </div>

      <div className="space-y-4">

        <div>
          <label className="text-slate-300 text-sm">
            GPT Name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ABC College AI"
            className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
          />
        </div>

        <div>
          <label className="text-slate-300 text-sm">
            Institution Type
          </label>

          <select
            value={institutionType}
            onChange={(e) =>
              setInstitutionType(e.target.value)
            }
            className="w-full mt-2  border border-white/10 rounded-xl px-4 py-3 text-red outline-none"
          >
            <option value="">Select Type</option>
            <option value="College">College</option>
            <option value="School">School</option>
            <option value="Hospital">Hospital</option>
            <option value="Company">Company</option>
          </select>
        </div>

        <div>
          <label className="text-slate-300 text-sm">
            Description
          </label>

          <textarea
            rows="4"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            placeholder="Describe your GPT..."
            className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none resize-none"
          />
        </div>

        <button
          onClick={handleCreateGPT}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-white font-semibold"
        >
          Create GPT
        </button>

      </div>

    </div>

  </div>
)}

      <button
  onClick={() => setShowModal(true)}
  className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-violet-600 hover:scale-105 transition-all duration-300 text-white px-6 py-4 rounded-2xl shadow-2xl font-semibold z-50"

>
  + Create GPT
</button>

    </div>
  );
}