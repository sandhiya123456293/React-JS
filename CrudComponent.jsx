import React, { useState, useEffect } from "react";
import axios from "axios";
import './CurdComponent.css'

const CrudComponent = () => {
  // State to manage the list of users and form input fields
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);

  // Base URL of the JSON Server API
  const baseUrl = "http://localhost:3000/login";

  // Fetch users from JSON Server (Read)
  const fetchUsers = async () => {
    try {
      const response = await axios.get(baseUrl);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching login:", error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Create a new user (Create)
  const createUser = async () => {
    try {
      const response = await axios.post(baseUrl, formData);
      setUsers([...users, response.data]);
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("Error creating login:", error);
    }
  };

  // Update an existing user (Update)
  const updateUser = async () => {
    try {
      const response = await axios.put(`${baseUrl}/${editId}`, formData);
      const updatedUsers = users.map((user) =>
        user.id === editId ? response.data : user
      );
      setUsers(updatedUsers);
      setFormData({ name: "", email: "" });
      setEditId(null);
    } catch (error) {
      console.error("Error updating login:", error);
    }
  };

  // Delete a user (Delete)
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      const updatedlogin = users.filter((user) => user.id !== id);
      setUsers(updatedlogin);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Handle form submission for create or update
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      updateUser();
    } else {
      createUser();
    }
  };

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Set form fields for editing a user
  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email });
    setEditId(user.id);
  };

  return (
    <div>
      <h1>CRUD OPERATION WITH AXIOS & API(JSON) </h1>

      {/* Form for Create or Update */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <button type="submit">{editId ? "Update" : "Create"}</button>
      </form>

      <h2><center>User List</center></h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudComponent;
