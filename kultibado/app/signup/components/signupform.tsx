//React
import { useState } from "react";

//Design
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeClosed, Eye, CircleCheck, CircleX, Eraser, } from "lucide-react";
import { clear } from "console";

//Routing
import { useNavigation } from "@/hooks/useNavigation";


const SignUpForm: React.FC = () => {
    //Variables
    const [email, setEmail] = useState("");
    const [firstPassword, setFirstPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");

    //Routing
    const {navigate} = useNavigation();

    //Error
    const [hasError, setHasError] = useState(false);

    //Handlers
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setHasError(false);
    }

    const handleFirstPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstPassword(e.target.value);
        setHasError(false);
    }

    const handleSecondPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSecondPassword(e.target.value);
        setHasError(false);
    }

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
        setHasError(false);
    }

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
        setHasError(false);
    }

    const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyName(e.target.value);
        setHasError(false);
    }

    const handleStreetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStreet(e.target.value);
        setHasError(false);
    }

    const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
        setHasError(false);
    }

    const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setZip(e.target.value);
        setHasError(false);
    }

    //Password
    const [showFirstPassword, setShowFirstPassword] = useState(false);
    const [showSecondPassword, setShowSecondPassword] = useState(false);

    const toggleFirstPasswordVisibility = () => {
        setShowFirstPassword(!showFirstPassword)
    }

    const toggleSecondPasswordVisibility = () => {
        setShowSecondPassword(!showSecondPassword)
    }

    //Email
    const clearEmail = () => {
        setEmail("");
    }

    //Routing
    const routeLogin = () => {
        navigate("/")
        return;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (
            email == "" || 
            firstPassword == "" || 
            secondPassword == "" || 
            firstName == "" ||
            lastName == "" ||
            companyName == "" ||
            street == "" ||
            city == "" ||
            zip == ""
        ) {
            setHasError(true);
            return;
        }
    }

    return (
        <Card className = "mx-auto max-w-sm border-0">
            <CardHeader className = "space-y-1">
                <CardTitle className = "text-2xl font-bold flex justify-center">
                    Sign Up
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
                                type = {showFirstPassword ? "text" : "password"}
                                value = {firstPassword}
                                onChange={handleFirstPasswordChange}
                                required>
                            </Input>
                            <Button variant = "ghost" size = "icon" onClick={toggleFirstPasswordVisibility}>
                                {showFirstPassword ? <Eye></Eye> : <EyeClosed></EyeClosed>}
                            </Button>
                        </div>
                        
                        <div className = "flex">
                            <Input 
                                className = "border-0" 
                                id = "secondPassword" 
                                placeholder = "Confirm Password" 
                                type = {showSecondPassword ? "text" : "password"}
                                value = {secondPassword}
                                onChange={handleSecondPasswordChange}
                                required
                            >
                            </Input>
                            <Button variant = "ghost" size = "icon" onClick={toggleSecondPasswordVisibility}>
                                {showSecondPassword ? <Eye></Eye> : <EyeClosed></EyeClosed>}
                            </Button>
                        </div>
                        
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="name" className="font-semibold">
                            Client Name
                        </Label>

                        <div className="flex">
                            <Input 
                                className="border-0" 
                                id="firstName" 
                                placeholder="First Name"
                                value = {firstName}
                                onChange={handleFirstNameChange}
                                required>
                            </Input>

                            <Input 
                                className="border-0" 
                                id="lastName" 
                                placeholder="Last Name"
                                value = {lastName}
                                onChange = {handleLastNameChange}
                                required>
                            </Input>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="company" className="font-semibold">
                            Company Name
                        </Label>

                        <div className="flex">
                            <Input 
                                className="border-0" 
                                id="companyName" 
                                placeholder="Company Name"
                                value = {companyName}
                                onChange={handleCompanyNameChange}
                                required>
                            </Input>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="address" className="font-semibold">
                            Address
                        </Label>

                        <div className = "flex">
                            <Input 
                                className="border-0" 
                                id="streetAddress" 
                                placeholder="Street Address"
                                value = {street}
                                onChange={handleStreetChange}
                                required>
                            </Input>
                        </div>

                        <div className = "flex">
                            <Input 
                                className="border-0" 
                                id="city" 
                                placeholder="City"
                                value = {city}
                                onChange={handleCityChange}
                                required>
                            </Input>

                            <Input 
                                className="border-0" 
                                id="zip" 
                                placeholder="Zip Code"
                                value = {zip}
                                onChange={handleZipChange}
                                required>
                            </Input>
                        </div>
                    </div>

                    <div className = "text-sm flex animate-pulse">
                        {hasError && <CircleX color = "red" className = "size-5"></CircleX>}
                        {hasError && <p className = "text-red-600 ml-1">All fields are required</p>}
                    </div>

                    <Button 
                        type = "submit" 
                        variant = "ghost" 
                        className = "w-full text-white font-bold bg-blue-600"
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </Button>

                    <CardFooter className = "flex justify-center text-sm">
                        <Button variant = "link" onClick={routeLogin}>Already have an account? Login here</Button>
                    </CardFooter>
                    
                </div>
            </CardContent>
        </Card>
    )
}

export default SignUpForm