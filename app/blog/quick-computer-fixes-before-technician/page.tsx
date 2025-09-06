import { Calendar, User, ArrowLeft, Phone, MessageCircle, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Computer Fixes Before Calling a Technician | St Mary's Computers",
  description: "Simple troubleshooting steps for common computer, laptop, and printer problems you can try at home. Save time and money with these quick fixes from St Mary's Computers.",
  keywords: "computer troubleshooting, laptop problems, printer fixes, DIY computer repair, computer not working",
};

const quickFixes = [
  {
    problem: "Computer Won't Turn On",
    steps: [
      "Check power cable connections at both ends",
      "Try a different power outlet",
      "For laptops: Hold power button for 30 seconds, then try starting",
      "Check if power LED lights are showing",
      "Remove battery (if removable) for 30 seconds, then reinstall"
    ],
    whenToCall: "If none of these work, likely hardware issue requiring professional diagnosis"
  },
  {
    problem: "Laptop Running Very Slow",
    steps: [
      "Restart your laptop completely",
      "Check available storage space (should have 15%+ free)",
      "Close unnecessary programs running in background",
      "Run Windows Disk Cleanup utility",
      "Check for Windows updates and install them"
    ],
    whenToCall: "If still slow after these steps, may need hardware upgrade or virus removal"
  },
  {
    problem: "Printer Not Printing",
    steps: [
      "Check printer power and cable connections",
      "Verify printer is set as default in Windows",
      "Check ink/toner levels and paper supply",
      "Cancel all print jobs and try printing test page",
      "Restart both computer and printer"
    ],
    whenToCall: "If test page fails or print quality is poor, professional service needed"
  },
  {
    problem: "WiFi Not Working",
    steps: [
      "Check if WiFi is enabled on your device",
      "Restart your router/modem (unplug for 30 seconds)",
      "Forget and reconnect to WiFi network",
      "Update network adapter drivers",
      "Try connecting other devices to same network"
    ],
    whenToCall: "If only your device can't connect, may need network adapter repair"
  },
  {
    problem: "Blue Screen Errors",
    steps: [
      "Note down the error code displayed",
      "Restart computer and see if error repeats",
      "Boot in Safe Mode and run system file checker",
      "Check for recent software installations or updates",
      "Run memory diagnostic tool"
    ],
    whenToCall: "Recurring blue screens usually indicate hardware problems requiring expert diagnosis"
  }
];

export default function QuickComputerFixesPage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quick Fixes Before You Call a Technician
          </h1>
          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>George CV</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>January 10, 2025</span>
            </div>
            <span>6 min read</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Before calling for professional help, try these simple troubleshooting steps that can resolve 
            many common computer and printer issues. These quick fixes might save you time and money.
          </p>
        </header>

        {/* Safety Warning */}
        <Alert className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Safety First:</strong> Only attempt these basic troubleshooting steps. Never open your computer case 
            or attempt hardware repairs unless you're qualified. If you're unsure about any step, contact a professional.
          </AlertDescription>
        </Alert>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Problems and Quick Solutions</h2>
          
          <div className="space-y-8">
            {quickFixes.map((fix, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{fix.problem}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-700">Try These Steps First:</h4>
                      <ol className="space-y-2">
                        {fix.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-3">
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full min-w-[24px] text-center">
                              {stepIndex + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <h4 className="font-semibold mb-2 text-yellow-800">When to Call a Professional:</h4>
                      <p className="text-yellow-700 text-sm">{fix.whenToCall}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">General Troubleshooting Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                Do These First
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Restart your device completely</li>
                <li>• Check all cable connections</li>
                <li>• Note any error messages exactly</li>
                <li>• Try the problem in Safe Mode</li>
                <li>• Check for recent changes or updates</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Don't Do These
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Don't force power buttons or connections</li>
                <li>• Don't open computer cases</li>
                <li>• Don't download random "fix" software</li>
                <li>• Don't ignore burning smells or sparks</li>
                <li>• Don't continue using overheating devices</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">When DIY Isn't Enough</h2>
          <p className="text-gray-700 mb-6">
            While these quick fixes can resolve many common issues, some problems require professional expertise. 
            Hardware failures, complex software issues, virus infections, and any problem involving data recovery 
            should be handled by qualified technicians.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Signs You Need Professional Help</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span>Burning smells or unusual noises</span>
            </li>
            <li className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span>Physical damage to device</span>
            </li>
            <li className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span>Repeated blue screen errors</span>
            </li>
            <li className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span>Suspected virus or malware infection</span>
            </li>
            <li className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span>Important data at risk</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prevention is Better Than Cure</h2>
          <p className="text-gray-700 mb-6">
            Regular maintenance can prevent many computer problems. Keep your system updated, run antivirus scans, 
            clean temporary files regularly, and ensure proper ventilation. At St Mary's Computers, we also offer 
            preventive maintenance services to keep your devices running smoothly.
          </p>
        </div>

        {/* CTA Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-center">Still Having Problems?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              If these quick fixes didn't solve your problem, don't worry! Contact St Mary's Computers for 
              professional diagnosis and repair. We provide honest assessments and transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+919910836286" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call +91 99108 36286
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://wa.me/919910836286?text=Hi%2C%20I%20tried%20the%20quick%20fixes%20but%20still%20need%20help" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Professional Help
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
