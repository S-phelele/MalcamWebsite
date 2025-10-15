"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import {
  MessageSquare,
  Send,
  FileText,
  Users,
  BarChart3,
  Shield,
  Plug,
  Building2,
  Landmark,
  Hotel,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  Clock,
  Target,
  Zap,
  Lock,
  TrendingUp,
  Globe,
  FileCheck,
  Webhook,
} from "lucide-react"

export default function WhatsAppBusinessPage() {
  const features = [
    {
      icon: Send,
      title: "Broadcasts & Campaigns",
      description: "Send approved templates to segments with scheduling and rate-limiting for optimal delivery.",
      details: [
        "Segment-based targeting",
        "Schedule campaigns in advance",
        "Rate limiting for compliance",
        "Bulk message delivery",
      ],
    },
    {
      icon: FileText,
      title: "Template Management",
      description: "Create, submit for approval, and track template statuses with parameterized messaging.",
      details: [
        "Template creation & submission",
        "Approval status tracking",
        "Dynamic placeholders",
        "Multi-language support",
      ],
    },
    {
      icon: Users,
      title: "Audience & Contacts",
      description: "Import groups, add tags, manage test numbers with deduplication and validation.",
      details: ["CSV/Excel import", "Contact tagging & grouping", "Duplicate detection", "Number validation"],
    },
    {
      icon: MessageSquare,
      title: "Inbox & Automation",
      description: "Team inbox with quick replies, automated flows, and webhooks to back-office systems.",
      details: ["Shared team inbox", "Quick reply templates", "Automated workflows", "Webhook integrations"],
      badge: "Roadmap",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Track sends, deliveries, read rates, responses, and cost estimates in real-time.",
      details: ["Delivery tracking", "Read rate analytics", "Response capture", "Cost estimation"],
    },
    {
      icon: Shield,
      title: "Compliance & Trust",
      description: "POPIA-compliant data handling with opt-in/opt-out management and secure hosting options.",
      details: ["POPIA compliance", "Opt-in/opt-out management", "Template approval workflows", "Audit trails"],
    },
  ]

  const templateExamples = [
    {
      category: "Banking Alert",
      template:
        "Hi {{name}}, your account ending in {{account}} has been credited with R{{amount}}. Balance: R{{balance}}. - {{bank_name}}",
      use: "Transaction notifications",
      icon: Landmark,
    },
    {
      category: "Appointment Reminder",
      template:
        "Hello {{name}}, this is a reminder of your appointment on {{date}} at {{time}} with {{provider}}. Reply CONFIRM or CANCEL.",
      use: "Healthcare & services",
      icon: Clock,
    },
    {
      category: "Order Update",
      template:
        "Hi {{name}}! Your order #{{order_id}} has been shipped and will arrive by {{delivery_date}}. Track: {{tracking_link}}",
      use: "E-commerce & retail",
      icon: ShoppingBag,
    },
    {
      category: "Service Notice",
      template:
        "Dear {{name}}, scheduled maintenance on {{date}} from {{start_time}} to {{end_time}}. Service may be affected. - {{department}}",
      use: "Public sector & utilities",
      icon: Building2,
    },
  ]

  const industries = [
    {
      icon: Building2,
      name: "Public Sector",
      use: "Service notices, appointment reminders, payment confirmations",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Landmark,
      name: "Financial Services",
      use: "Transaction alerts, fraud warnings, account updates",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Hotel,
      name: "Hospitality",
      use: "Booking confirmations, check-in reminders, guest services",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: ShoppingBag,
      name: "Retail",
      use: "Order updates, promotional campaigns, loyalty programs",
      color: "bg-pink-100 text-pink-600",
    },
  ]

  const complianceFeatures = [
    { icon: Shield, text: "POPIA-compliant data handling" },
    { icon: CheckCircle2, text: "Opt-in/opt-out management" },
    { icon: FileCheck, text: "Template approval workflows" },
    { icon: Globe, text: "On-premise or cloud hosting" },
    { icon: Lock, text: "Audit trails & logging" },
    { icon: Zap, text: "Secure data encryption" },
  ]

  const integrations = [
    { icon: Target, text: "CRM systems (Salesforce, HubSpot)" },
    { icon: Building2, text: "ERP platforms (SAP, Oracle)" },
    { icon: TrendingUp, text: "Payment gateways" },
    { icon: Webhook, text: "Custom APIs via webhooks" },
    { icon: BarChart3, text: "Database connections" },
    { icon: Zap, text: "Marketing automation tools" },
  ]

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 5,000 messages/month",
        "Basic template management",
        "Contact import & tagging",
        "Email support",
      ],
    },
    {
      name: "Business",
      description: "For growing companies with higher volume",
      features: [
        "Up to 50,000 messages/month",
        "Advanced analytics",
        "API access",
        "Priority support",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited messages",
        "Dedicated account manager",
        "On-premise deployment option",
        "SLA guarantees",
        "Custom development",
      ],
    },
  ]

  const benefits = [
    {
      icon: Target,
      title: "Reach at Scale",
      description: "Connect with thousands of customers instantly on their preferred messaging platform",
    },
    {
      icon: Shield,
      title: "Stay Compliant",
      description: "Built-in POPIA compliance and WhatsApp Business policy adherence",
    },
    {
      icon: TrendingUp,
      title: "Drive Results",
      description: "Higher open rates and engagement compared to traditional channels",
    },
    {
      icon: Zap,
      title: "Automate Workflows",
      description: "Integrate with your existing systems for seamless automation",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#25D366] via-[#20BA5A] to-[#128C7E] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl animate-float">💬</div>
          <div className="absolute top-40 right-20 text-4xl animate-float-delayed">✓✓</div>
          <div className="absolute bottom-20 left-1/4 text-5xl animate-float">📱</div>
          <div className="absolute bottom-40 right-1/3 text-3xl animate-float-delayed">🚀</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="brightness-0 invert"
                  />
                  <span className="text-sm font-semibold">Broadcastly by Malcam</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                  Reach customers on WhatsApp—at scale, with compliance
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-green-50 text-pretty">
                  Launch compliant WhatsApp campaigns, manage templates, and integrate with your systems—powered by
                  Malcam's network expertise and infrastructure know-how.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" className="bg-white text-[#25D366] hover:bg-green-50 font-semibold">
                    <Link href="/contact" className="flex items-center gap-2">
                      Book a Demo
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <Link href="/contact">Request Template Setup</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="bg-[#075E54] text-white p-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold">Broadcastly</div>
                          <div className="text-xs text-green-200">WhatsApp Business API</div>
                        </div>
                      </div>
                      <div className="p-6 space-y-4 bg-[#ECE5DD] min-h-[300px]">
                        <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                          <p className="text-sm text-gray-800">Hi John, your order #12345 has been shipped! 📦</p>
                          <p className="text-xs text-gray-500 mt-1">10:30 AM ✓✓</p>
                        </div>
                        <div className="bg-[#DCF8C6] rounded-lg p-3 shadow-sm max-w-[80%] ml-auto">
                          <p className="text-sm text-gray-800">Great! When will it arrive?</p>
                          <p className="text-xs text-gray-500 mt-1 text-right">10:31 AM ✓✓</p>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                          <p className="text-sm text-gray-800">Expected delivery: Tomorrow by 5 PM 🚚</p>
                          <p className="text-xs text-gray-500 mt-1">10:31 AM ✓✓</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 bg-green-100 rounded-full mb-3">
                  <benefit.icon className="h-6 w-6 text-[#25D366]" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Get</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete WhatsApp Business solution with enterprise-grade features built on Malcam's proven infrastructure
              expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border-t-4 border-t-[#25D366]"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-green-50 rounded-xl group-hover:bg-[#25D366] transition-colors">
                      <feature.icon className="h-7 w-7 text-[#25D366] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-xl group-hover:text-[#25D366] transition-colors">
                          {feature.title}
                        </h3>
                        {feature.badge && (
                          <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                            {feature.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Template Examples Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FileText className="h-12 w-12 text-[#25D366] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Approved Template Examples</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pre-approved template formats with dynamic placeholders for various industries and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {templateExamples.map((example, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <example.icon className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="border-[#25D366] text-[#25D366]">
                        {example.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground ml-2">• {example.use}</span>
                    </div>
                  </div>
                  <div className="bg-white border-2 border-green-200 rounded-xl p-5 shadow-sm group-hover:border-[#25D366] transition-colors">
                    <div className="flex items-start gap-2 mb-2">
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                        width={20}
                        height={20}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-mono text-gray-800 whitespace-pre-wrap leading-relaxed">
                          {example.template}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-3">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                      <span>WhatsApp Approved Template</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
              <Link href="/contact">Request Custom Templates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Compliance & Integrations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Compliance */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Shield className="h-8 w-8 text-[#25D366]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Compliance & Trust</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  Built with POPIA compliance and WhatsApp Business policies at the core. Your data, your choice of
                  hosting—on-premise or cloud.
                </p>
                <div className="grid gap-4">
                  {complianceFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group"
                    >
                      <div className="p-2 bg-white rounded-lg group-hover:bg-[#25D366] transition-colors">
                        <feature.icon className="h-5 w-5 text-[#25D366] group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Plug className="h-8 w-8 text-[#25D366]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Seamless Integrations</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  Leverage Malcam's infrastructure expertise for secure, reliable connectivity to your existing business
                  systems and workflows.
                </p>
                <div className="grid gap-4">
                  {integrations.map((integration, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group"
                    >
                      <div className="p-2 bg-white rounded-lg group-hover:bg-[#25D366] transition-colors">
                        <integration.icon className="h-5 w-5 text-[#25D366] group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-medium">{integration.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Your Industry</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored WhatsApp Business solutions for diverse sectors across South Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8">
                  <div
                    className={`inline-flex p-5 ${industry.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <industry.icon className="h-10 w-10" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-[#25D366] transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{industry.use}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose a plan that fits your needs, or talk to sales for a tailored enterprise solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  tier.popular ? "border-[#25D366] border-2 shadow-lg" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#25D366] text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground mb-8 min-h-[48px]">{tier.description}</p>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      tier.popular
                        ? "bg-[#25D366] hover:bg-[#20BA5A] text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    <Link href="/contact">Talk to Sales</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">All plans include secure hosting and 24/7 technical support</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#25D366] via-[#20BA5A] to-[#128C7E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 text-8xl">✓</div>
          <div className="absolute bottom-10 left-10 text-8xl">✓</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                width={20}
                height={20}
                className="brightness-0 invert"
              />
              <span className="text-sm font-semibold">Powered by Malcam's Network Expertise</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Customer Engagement?</h2>
            <p className="text-xl md:text-2xl mb-10 text-green-50">
              Join leading South African businesses using Broadcastly to reach customers on WhatsApp with confidence,
              compliance, and the reliability of Malcam's proven infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#25D366] hover:bg-green-50 font-semibold text-lg px-8">
                <Link href="/contact" className="flex items-center gap-2">
                  Book a Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent text-lg px-8"
              >
                <Link href="/contact">Request Template Setup</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent text-lg px-8"
              >
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
