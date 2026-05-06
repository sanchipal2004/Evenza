import React, { useState } from "react";
import api from "../../api.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function CreateEvent() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        googleFormLink: ""
    })
    const [banner, setBanner] = useState(null);
    const [preview, setPreview] = useState(null);

    

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await api.get("/auth/me");
                if (res.data.data) {
                    setUser(res.data.data);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchUser();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleBanner = (e) => {
        const file = e.target.files[0];
        setBanner(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        data.append("banner", banner);

        try {
            await api.post("/events/create", data);

            alert("Event created successfully");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50">

            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-white border-r">

                <div className="p-8 text-xl font-bold text-purple-600">
                    ClubHub
                    <p className="text-sm text-gray-400">
                        {user?.fullName || "Club Organizer"}
                    </p>
                </div>
                <nav className="flex flex-col gap-1 px-8"> <button className="text-left px-4 py-2 rounded hover:bg-gray-100" onClick={() => navigate("/OrganizationDashboard")}> Dashboard </button> <button className="text-left px-4 py-2 rounded bg-purple-100 text-purple-600" onClick={() => navigate("/CreateEvent")}> Create Events </button>
                    <button className="text-left px-4 py-2 rounded bg-purple-100 text-purple-600" onClick={() => navigate("/Events")}>  Events </button>  </nav>

            </div>

            {/* Main */}
            <div className="flex-1 p-6 md:p-10">

                {/* Header */}
                <div className="mb-8">
                    <p className="text-sm text-gray-500">
                        Events &gt; Create New Event
                    </p>

                    <h1 className="text-3xl font-bold mt-2">
                        Create New Club Event
                    </h1>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-xl shadow p-6 space-y-6"
                >

                    {/* Banner Upload */}
                    <div>

                        <p className="text-sm font-semibold mb-2">
                            EVENT BANNER
                        </p>

                        <label className="border-2 border-dashed rounded-lg h-48 flex flex-col items-center justify-center text-gray-400 cursor-pointer">

                            {preview ? (
                                <img
                                    src={preview}
                                    className="h-full object-cover"
                                />
                            ) : (
                                <>
                                    <p>Click to upload banner image</p>
                                    <p className="text-xs">
                                        SVG, PNG, JPG or GIF (max. 10MB)
                                    </p>
                                </>
                            )}

                            <input
                                type="file"
                                hidden
                                onChange={handleBanner}
                            />

                        </label>

                    </div>

                    {/* Title */}
                    <div>

                        <p className="text-sm font-semibold mb-2">
                            EVENT TITLE
                        </p>

                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="e.g. Annual Tech Symposium 2024"
                        />

                    </div>

                    {/* Description */}
                    <div>

                        <p className="text-sm font-semibold mb-2">
                            DESCRIPTION
                        </p>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full border rounded-lg p-3"
                        />

                    </div>

                    {/* Date + Time */}
                    <div className="grid md:grid-cols-2 gap-4">

                        <div>
                            <p className="text-sm font-semibold mb-2">
                                DATE
                            </p>

                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <p className="text-sm font-semibold mb-2">
                                TIME
                            </p>

                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                    </div>

                    {/* Location + Registration */}
                    <div className="grid md:grid-cols-2 gap-4">

                        <div>
                            <p className="text-sm font-semibold mb-2">
                                LOCATION
                            </p>

                            <input
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <p className="text-sm font-semibold mb-2">
                                REGISTRATION LINK
                            </p>

                            <input
                                name="googleFormLink"
                                value={formData.googleFormLink}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                    </div>

                    {/* Submit */}
                    <div className="flex justify-end">

                        <button
                            type="submit"
                            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700" onClick={() => { navigate("/") }}
                        >
                            Publish Event
                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
}