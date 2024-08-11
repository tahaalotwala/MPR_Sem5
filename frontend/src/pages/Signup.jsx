import { Button, TextField, RadioGroup, FormControlLabel, FormControl, FormLabel, Radio, Select, MenuItem, InputAdornment, IconButton, CircularProgress } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

export const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { loading, signup } = useSignup();
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
        location: ""
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const success = await signup(formData);
        if (success) navigate("/");
    };

    return (
        <div className="md:w-1/3 border-2 border-[#6F4DF7] rounded-xl p-6 mx-auto my-10 shadow-xl bg-white">
            <h1 className="text-3xl font-semibold text-center mb-4">Create an Account</h1>

            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    fullWidth
                    size="small"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    sx={{ height: "35px", marginBottom: "1rem" }}
                    disabled={loading}
                />

                <TextField
                    variant="outlined"
                    type="text"
                    name="username"
                    placeholder="Username"
                    fullWidth
                    size="small"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    sx={{ height: "35px", marginBottom: "1rem" }}
                    disabled={loading}
                />

                <FormControl component="fieldset" fullWidth className="mb-3">
                    <FormLabel component="legend" className="text-gray-700">Gender</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        row
                        className="justify-around"
                        disabled={loading}
                    >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                    </RadioGroup>
                </FormControl>

                <FormControl fullWidth className="mb-3">
                    <FormLabel component="legend" className="text-gray-700">Location</FormLabel>
                    <Select
                        name="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        displayEmpty
                        variant="outlined"
                        size="small"
                        sx={{ height: "35px", marginBottom: "1rem" }}
                        disabled={loading}
                    >
                        <MenuItem value="" disabled>Select Location</MenuItem>
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
                    size="small"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    sx={{ marginBottom: "1rem" }}
                    InputProps={{
                        style: { height: "35px" },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility}>
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    disabled={loading}
                />

                <TextField
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    fullWidth
                    size="small"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    sx={{ height: "35px", marginBottom: "1rem" }}
                    disabled={loading}
                />

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    className="h-10"
                    disabled={loading}
                >
                    {loading ? (
                        <CircularProgress size={24} sx={{ color: 'white' }} />
                    ) : (
                        "Sign Up"
                    )}
                </Button>

                <div className="flex justify-center items-center mt-3">
                    <span className="text-sm">Already have an account?</span>
                    <Link to="/login" className="text-sm text-blue-500 hover:underline ml-1">Sign in</Link>
                </div>
            </form>
        </div>
    );
};
