import { useState } from "react";
import axios from "axios";

export default function AddProject() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    tags: "",
    github: "",
    live: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      tags: form.tags.split(","),
    };

    await axios.post("http://localhost:5000/api/projects/add", payload);
    alert("Project Added!");
  };

  return ( 
    <div className="p-8 max-w-xl mx-auto bg-gray-800 text-white rounded-xl">
      <h2 className="text-2xl font-bold mb-4
      ">Add New Project</h2>

      <form onSubmit={handleSubmit}  className="space-y-4 pt-20">
        <input className="w-full p-2 rounded bg-gray-700"
          name="title" placeholder="Title" onChange={handleChange} />

        <textarea className="w-full p-2 rounded bg-gray-700"
          name="description" placeholder="Description" onChange={handleChange} />

        <input className="w-full p-2 rounded bg-gray-700"
          name="tags" placeholder="Tags (comma separated)" onChange={handleChange} />

        <input className="w-full p-2 rounded bg-gray-700"
          name="github" placeholder="GitHub Link" onChange={handleChange} />

        <input className="w-full p-2 rounded bg-gray-700"
          name="live" placeholder="Live Link" onChange={handleChange} />

        <input className="w-full p-2 rounded bg-gray-700"
          name="image" placeholder="Image URL or Path" onChange={handleChange} />

        <select className="w-full p-2 rounded bg-gray-700"
          name="category" onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="fullstack">Fullstack</option>
          <option value="frontend">Frontend</option>
        </select>

        <button className="w-full py-2 bg-blue-600 rounded">Add Project</button>
      </form>
    </div>
  );
}
