import { Shield, Eye, Lock, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | St Mary's Computers - Data Protection & Privacy",
  description: "Privacy policy for St Mary's Computers website and services. Learn how we protect your personal information and data during computer repair services.",
  keywords: "privacy policy, data protection, St Mary's Computers, personal information security",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy and data security are important to us
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: September 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              Our Commitment to Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              St Mary's Computers ("we," "our," or "us") is committed to protecting your privacy and 
              personal information. This Privacy Policy explains how we collect, use, and safeguard 
              your information when you visit our website or use our computer repair services.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-6 h-6 text-green-600" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Name and contact information (phone number, email address)</li>
                <li>Address for on-site service delivery</li>
                <li>Device information and repair history</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Website Usage Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referral sources and search terms used</li>
                <li>Device type and operating system</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Service-Related Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Computer/device specifications and condition</li>
                <li>Problem descriptions and repair requirements</li>
                <li>Service history and follow-up communications</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>To provide computer repair and technical support services</li>
              <li>To schedule appointments and coordinate on-site visits</li>
              <li>To communicate about service status and follow-up</li>
              <li>To process payments and maintain service records</li>
              <li>To improve our website and service quality</li>
              <li>To send service reminders and maintenance tips (with your consent)</li>
              <li>To comply with legal requirements and protect our business interests</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-6 h-6 text-purple-600" />
              Data Protection & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">During Repair Services</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Your device data remains confidential and is not accessed unnecessarily</li>
                <li>We recommend backing up important data before service</li>
                <li>Any data access required for repair is performed with your explicit consent</li>
                <li>We do not copy, store, or share your personal files</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Website Security</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>SSL encryption for all data transmission</li>
                <li>Secure hosting with regular security updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Regular security audits and monitoring</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Services */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Google Analytics</h3>
              <p className="text-gray-700">
                We use Google Analytics to understand website usage and improve our services. 
                Google Analytics may collect anonymous usage data. You can opt-out using 
                Google's opt-out tools.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">WhatsApp Business</h3>
              <p className="text-gray-700">
                We use WhatsApp Business for customer communication. Messages sent through 
                WhatsApp are subject to WhatsApp's privacy policy and terms of service.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Payment Processors</h3>
              <p className="text-gray-700">
                Payment information is processed through secure third-party payment providers. 
                We do not store credit card or banking information on our systems.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cookies and Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Our website uses cookies to improve your browsing experience and analyze website traffic. 
              Cookies are small text files stored on your device that help us:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Remember your preferences and settings</li>
              <li>Analyze website performance and usage patterns</li>
              <li>Provide relevant content and improve user experience</li>
            </ul>
            <p className="text-gray-700 mt-4">
              You can control cookie settings through your browser preferences. Disabling cookies 
              may affect website functionality.
            </p>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Privacy Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>File a complaint about our privacy practices</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Data Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We retain your personal information only as long as necessary to provide services 
              and comply with legal obligations. Service records are typically maintained for 
              3 years for warranty and support purposes. Website analytics data is retained 
              according to Google Analytics default settings (26 months).
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contact Us About Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
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
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card>
          <CardHeader>
            <CardTitle>Policy Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically to reflect changes in our practices 
              or legal requirements. We will notify you of significant changes by posting the 
              updated policy on our website with a new "Last updated" date. Your continued use 
              of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
