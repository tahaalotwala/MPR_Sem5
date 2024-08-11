import { Button, TextField, RadioGroup, FormControlLabel, FormControl, FormLabel, Radio, Select, MenuItem } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from "react";

export default function SignUp({ switchToSignIn }) {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
        location: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignUp = async () => {
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                alert("User registered successfully!");
                switchToSignIn(); // Redirect to sign-in after successful sign-up
            } else {
                setError(result.error);
            }
        } catch (err) {
            console.error("Error during sign-up:", err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div 
            className="flex flex-col w-screen h-{120vh} justify-center items-center bg-gray-50">
            <div 
                className="flex flex-col justify-center items-center gap-3 border border-blue-700 h-auto w-80 bg-white p-5 rounded-lg shadow-lg m-10">
                <h1 className="text-2xl">Create an Account</h1>
                {error && <p className="text-red-500">{error}</p>}
                <TextField
                    variant="outlined"
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    fullWidth
                    value={formData.fullName}
                    onChange={handleChange}
                    InputProps={{ className: "text-center" }}
                />
                <TextField
                    variant="outlined"
                    type="text"
                    name="username"
                    placeholder="Username"
                    fullWidth
                    value={formData.username}
                    onChange={handleChange}
                    InputProps={{ className: "text-center" }}
                />
                
                {/* Gender Radio Buttons */}
                <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        row
                    >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                {/* Location Dropdown */}
                <FormControl fullWidth>
                    <FormLabel component="legend">Location</FormLabel>
                    <Select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        displayEmpty
                    >
                        <MenuItem value="" disabled>
                            Select Location
                        </MenuItem>
                        <MenuItem value="New York">New York</MenuItem>
                        <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                        <MenuItem value="Chicago">Chicago</MenuItem>
                        <MenuItem value="Houston">Houston</MenuItem>
                        <MenuItem value="Miami">Miami</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    fullWidth
                    value={formData.password}
                    onChange={handleChange}
                    InputProps={{ className: "text-center" }}
                />
                <TextField
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    fullWidth
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    InputProps={{ className: "text-center" }}
                />
                <Button 
                    onClick={togglePasswordVisibility}
                    variant="contained" 
                    className="bg-red-700 text-white rounded-none"
                >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                </Button>
                <Button
                    variant="contained"
                    className="bg-red-700 text-white rounded-none"
                    onClick={handleSignUp}
                >
                    Sign Up
                </Button>
                <Button
                    onClick={switchToSignIn}
                    variant="text"
                    className="text-blue-500"
                >
                    Already have an account? Sign in
                </Button>
            </div>
        </div>
    );
}