import { FileText, Shield, AlertTriangle, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | St Mary's Computers - Service Terms & Conditions",
  description: "Terms of service and conditions for computer repair services at St Mary's Computers. Read our service terms, liability limitations, and customer responsibilities.",
  keywords: "terms of service, service conditions, computer repair terms, liability, St Mary's Computers",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Terms and conditions for St Mary&apos;s Computers services
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2025
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Important:</strong> By using our services, you agree to these terms. 
            Please read them carefully before proceeding with any repair service.
          </AlertDescription>
        </Alert>

        {/* Acceptance of Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-blue-600" />
              Acceptance of Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of St Mary&apos;s Computers services
              and website. By engaging our services, visiting our website, or communicating with 
              us, you agree to be bound by these Terms. If you do not agree with any part of 
              these terms, please do not use our services.
            </p>
          </CardContent>
        </Card>

        {/* Service Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Service Terms & Conditions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Service Scope</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>We provide computer repair, maintenance, and technical support services</li>
                <li>Services include hardware repair, software installation, virus removal, and data recovery</li>
                <li>We reserve the right to refuse service for any reason</li>
                <li>Service availability may vary by location and device type</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Customer Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Provide accurate information about device problems and history</li>
                <li>Back up important data before service (we recommend this but are not responsible for data loss)</li>
                <li>Remove personal and confidential information when possible</li>
                <li>Provide necessary passwords and access credentials for service</li>
                <li>Pay for services as agreed upon completion</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Service Process</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Initial diagnosis will be performed to identify issues</li>
                <li>Repair estimates will be provided before proceeding with work</li>
                <li>Customer approval is required for any work exceeding estimated costs</li>
                <li>We will use reasonable efforts to complete repairs within estimated timeframes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Pricing & Payment */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pricing & Payment Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Pricing</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>All prices are quoted in Indian Rupees (INR)</li>
                <li>Prices may vary based on device type, problem complexity, and parts required</li>
                <li>Quotes are valid for 7 days from the date provided</li>
                <li>Additional charges may apply for emergency or after-hours service</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Payment</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Payment is due upon completion of service unless other arrangements are made</li>
                <li>We accept cash, UPI, bank transfer, and card payments</li>
                <li>Devices may be held until payment is received in full</li>
                <li>Late payment charges may apply for overdue accounts</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-red-600" />
              Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Data Loss</h3>
              <p className="text-gray-700">
                While we take reasonable precautions to protect your data, we are not responsible 
                for any data loss that may occur during repair. We strongly recommend backing up 
                all important data before service. Data recovery services are provided on a 
                best-effort basis with no guarantee of success.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Device Damage</h3>
              <p className="text-gray-700">
                We exercise reasonable care in handling your devices. However, we are not liable 
                for pre-existing damage, wear and tear, or damage that occurs due to the inherent 
                condition of the device. Our liability is limited to the cost of repair services provided.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Service Limitations</h3>
              <p className="text-gray-700">
                We provide services to the best of our ability using industry-standard practices. 
                However, we cannot guarantee that all issues can be resolved or that devices will 
                function exactly as they did before the problem occurred.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Service Guarantee */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Service Quality & Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-700">
                We stand behind our work and strive to provide quality service. If you experience 
                issues related to our repair work within a reasonable time after service, we will 
                review and address the problem at no additional charge if it&apos;s determined to be
                related to our work.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Parts & Components</h3>
              <p className="text-gray-700">
                We use genuine or high-quality compatible parts whenever possible. Parts are 
                subject to manufacturer defects and limitations. We will replace defective parts 
                when possible, but cannot guarantee availability of specific parts for older devices.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Confidentiality */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Privacy & Confidentiality</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              We respect your privacy and maintain confidentiality of your personal information 
              and data. Our privacy practices are detailed in our Privacy Policy. Key points include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>We do not access personal files unnecessarily</li>
              <li>Any data access required for repair is performed with your consent</li>
              <li>We do not copy, store, or share your personal information</li>
              <li>Customer information is kept confidential and secure</li>
            </ul>
          </CardContent>
        </Card>

        {/* Dispute Resolution */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dispute Resolution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              We are committed to resolving any disputes fairly and promptly:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Contact us directly to discuss any concerns or issues</li>
              <li>We will make reasonable efforts to resolve disputes amicably</li>
              <li>Disputes will be governed by Indian law and Delhi jurisdiction</li>
              <li>Legal action should be a last resort after attempting direct resolution</li>
            </ul>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We may update these Terms of Service periodically to reflect changes in our 
              services or legal requirements. Updated terms will be posted on our website 
              with a new &ldquo;Last updated&rdquo; date. Continued use of our services after changes
              constitutes acceptance of the updated terms.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+91 99108 36286</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-600" />
                <span>stmaryscomputers@gmail.com</span>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                St Mary&apos;s Computers<br />
                Laxmi Nagar, New Delhi - 110092
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
