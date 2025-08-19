//React
import { useState } from "react";

//Design
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeClosed, Eye, CircleCheck, CircleX, Eraser, } from "lucide-react";

//Navigation
import { useNavigation } from "@/hooks/useNavigation";


const LoginForm: React.FC = () => {
    //Routing
    const {navigate} = useNavigation();

    //Variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Error
    const [hasError, setHasError] = useState(false);

    //Handlers
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setHasError(false);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setHasError(false);
    }

    //Password
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    //Email
    const clearEmail = () => {
        setEmail("");
    }

    //Routing
    const routeSignup = () => {
        navigate("/signup")
        return;
    }

    return (
        <Card className = "mx-auto max-w-sm font-sans border-0">
            <CardHeader className = "space-y-1">
                <CardTitle className = "text-2xl font-bold flex justify-center">
                    Login
                </CardTitle>
            </CardHeader>
            
            <CardContent>
                <div className = "space-y-4">
                    <div className = "space-y-2">
                        <Label htmlFor="email" className="font-semibold">
                            Email
                        </Label>
                        <div className = "flex">
                            <Input 
                                className="border-0"
                                id = "email" 
                                type="email" 
                                placeholder="@example.com"
                                value = {email}
                                onChange={handleEmailChange}
                                required>
                            </Input>
                            <Button variant = "ghost" size = "icon" onClick={clearEmail}>
                                <Eraser></Eraser>
                            </Button>
                        </div>
                    </div>

                    <div className = "space-y-2">
                        <Label htmlFor="password" className="font-semibold">
                            Password
                        </Label>
                        <div className = "flex">
                            <Input 
                                className="border-0" 
                                id="firstPassword" 
                                placeholder="Input Password"
                                type = {showPassword ? "text" : "password"}
                                value = {password}
                                onChange={handlePasswordChange}
                                required>
                            </Input>
                            <Button variant = "ghost" size = "icon" onClick={togglePasswordVisibility}>
                                {showPassword ? <Eye></Eye> : <EyeClosed></EyeClosed>}
                            </Button>
                        </div>
                        
                    </div>

                    <Button type = "submit" variant = "ghost" className = "w-full text-white bg-blue-500">
                        Login
                    </Button>

                    <CardFooter className = "flex justify-center text-sm">
                        <Button onClick = {routeSignup} variant = "link">Don't have an account? Sign up here</Button>
                    </CardFooter>
                    
                </div>
            </CardContent>
        </Card>
    )
}

export default LoginForm