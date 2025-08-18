//React
import { useState } from "react";

//Design
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeClosed, Eye, CircleCheck, CircleX, Eraser, } from "lucide-react";


const SignUpForm: React.FC = () => {

    return (
        <Card className = "mx-auto max-w-sm font-sans border-0">
            <CardHeader className = "space-y-1">
                <CardTitle className = "text-2xl font-bold flex justify-center">
                    Sign Up
                </CardTitle>
            </CardHeader>
            
            <CardContent>
                <div className = "space-y-4">
                    <div className = "space-y-2">
                        <Label htmlFor="email">
                            Email
                        </Label>
                        <div className = "flex">
                            <Input 
                                className="border-0"
                                id = "email" 
                                type="email" 
                                placeholder="@example.com"
                                required>
                            </Input>
                            <Button variant = "ghost" size = "icon">
                                <Eraser></Eraser>
                            </Button>
                        </div>
                    </div>

                    <div className = "space-y-2">
                        <Label htmlFor="password">
                            Password
                        </Label>
                        <div className = "flex">
                            <Input 
                                className="border-0" 
                                id="firstPassword" 
                                placeholder="Input Password"
                                required>
                            </Input>
                            <Button variant = "ghost" size = "icon">
                                <EyeClosed></EyeClosed>
                            </Button>
                        </div>
                        
                        <div className = "flex">
                            <Input 
                                className = "border-0" id = "secondPassword" 
                                placeholder = "Confirm Password" 
                                required
                            >
                            </Input>
                            <Button variant = "ghost" size = "icon">
                                <EyeClosed></EyeClosed>
                            </Button>
                        </div>
                        
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="address">
                            Address
                        </Label>

                        <div className = "flex">
                            <Input 
                                className="border-0" 
                                id="streetAddress" 
                                placeholder="Street Address"
                                required>
                            </Input>
                        </div>

                        <div className = "flex">
                            <Input 
                                className="border-0" 
                                id="city" 
                                placeholder="City"
                                required>
                            </Input>

                            <Input 
                                className="border-0" 
                                id="zip" 
                                placeholder="Zip Code"
                                required>
                            </Input>
                        </div>
                    </div>

                    <Button type = "submit" variant = "ghost" className = "w-full text-white bg-blue-500">
                        Sign Up
                    </Button>

                    <CardFooter className = "flex justify-center text-sm">
                        <Button variant = "link">Already have an account? Login here</Button>
                    </CardFooter>
                    
                </div>
            </CardContent>
        </Card>
    )
}

export default SignUpForm