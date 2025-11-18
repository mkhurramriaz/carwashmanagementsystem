
import { useState } from "react";  
import { Link } from 'react-router-dom';  
import axios from 'axios';  
import { useNavigate } from "react-router-dom"; 

function Signup() {
   
    const [name, setName] = useState("");  
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState("");  
    
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();  
        setError(""); 

    
        if (name.length < 3) {
            setError("Name must be at least 3 characters long");
            return;
        }
        if (password.length < 3) {
            setError("Password must be at least 3 characters long");
            return;
        }

       
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                
                navigate("/login");
                console.log(result);  
            })
            .catch(err => {
              
                console.log(err);
                setError(err.response?.data?.message || "Registration failed. Please try again.");
            });
    };

  
    return (
        <div>
            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
            <form onSubmit={handleSubmit}>  
                Enter Name 
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}  
                    minLength={3}
                />
                <br></br>  
                
            
                Enter Email 
                <input 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br></br> 
                
        
                Enter Password 
                <input 
                    type="password"  
                    name="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}  
                    minLength={3}
                />
                <br></br>  
                
           
                <button type="submit" className="btn btn-success">Register</button>  
            </form>

            
            <Link to="/login" className="btn btn-success">Login</Link> 
        </div>
    );
} 
export default Signup;
