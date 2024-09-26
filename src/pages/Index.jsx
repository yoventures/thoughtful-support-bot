import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Thoughtful AI Support</CardTitle>
          <CardDescription>Get help with Thoughtful AI's agents</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Click the button below to launch our AI support agent.</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => window.open('/thoughtful_ai_agent', '_blank')}>Launch Support Agent</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;