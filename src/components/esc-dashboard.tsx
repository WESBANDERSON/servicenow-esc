"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Bell, 
  Settings, 
  FileText, 
  Clock, 
  CheckCircle,
  Plus,
  Filter,
  MoreHorizontal,
  Home,
  BookOpen,
  ShoppingCart,
  UserCheck
} from "lucide-react";

export function ESCDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ESC</span>
                </div>
                <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Employee Service Center
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services, knowledge..."
                  className="pl-10 pr-4 py-2 w-64 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
              
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              
              <Avatar className="cursor-pointer">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Services</span>
            </TabsTrigger>
            <TabsTrigger value="knowledge" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Knowledge</span>
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>My Requests</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <UserCheck className="w-4 h-4" />
              <span>Profile</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium opacity-90">Active Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs opacity-75">+2 from last week</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium opacity-90">Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">48</div>
                  <p className="text-xs opacity-75">This month</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium opacity-90">Knowledge Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs opacity-75">Available</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium opacity-90">Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs opacity-75">Available</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Quick Actions
                    <Button variant="ghost" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      New Request
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    Common services and quick access
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "Request IT Support", description: "Get help with technical issues", icon: "💻" },
                    { title: "Request Office Supplies", description: "Order supplies for your workspace", icon: "📦" },
                    { title: "Request Time Off", description: "Submit vacation or sick leave", icon: "🏖️" },
                    { title: "Update Personal Info", description: "Change your contact information", icon: "👤" }
                  ].map((action, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                      <span className="text-2xl">{action.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 dark:text-white">{action.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{action.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your latest requests and updates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "IT Support Request", status: "In Progress", time: "2 hours ago", icon: Clock },
                    { title: "Office Supplies Order", status: "Completed", time: "1 day ago", icon: CheckCircle },
                    { title: "Time Off Request", status: "Approved", time: "3 days ago", icon: CheckCircle },
                    { title: "Password Reset", status: "Completed", time: "1 week ago", icon: CheckCircle }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                        <activity.icon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 dark:text-white">{activity.title}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge variant={activity.status === "Completed" ? "default" : "secondary"}>
                            {activity.status}
                          </Badge>
                          <span className="text-sm text-slate-500 dark:text-slate-400">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Service Catalog</h2>
                <p className="text-slate-500 dark:text-slate-400">Browse and request services</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "IT Support", description: "Technical assistance and troubleshooting", category: "IT", icon: "💻" },
                { title: "Office Supplies", description: "Order supplies for your workspace", category: "Facilities", icon: "📦" },
                { title: "Time Off Request", description: "Submit vacation and sick leave requests", category: "HR", icon: "🏖️" },
                { title: "Equipment Request", description: "Request laptops, monitors, and other equipment", category: "IT", icon: "🖥️" },
                { title: "Access Request", description: "Request access to systems and applications", category: "IT", icon: "🔐" },
                { title: "Training Request", description: "Request training and development opportunities", category: "HR", icon: "📚" }
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{service.icon}</span>
                      <Badge variant="outline">{service.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      Request Service
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Knowledge Tab */}
          <TabsContent value="knowledge" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Knowledge Base</h2>
                <p className="text-slate-500 dark:text-slate-400">Find answers and solutions</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "How to Reset Your Password", description: "Step-by-step guide to reset your password", category: "IT", views: 1250 },
                { title: "Setting Up VPN Access", description: "Configure VPN for remote work", category: "IT", views: 890 },
                { title: "Office Equipment Guidelines", description: "Rules and procedures for office equipment", category: "Facilities", views: 650 },
                { title: "Time Off Policies", description: "Understanding vacation and sick leave policies", category: "HR", views: 1200 },
                { title: "Software Installation Process", description: "How to request and install software", category: "IT", views: 750 },
                { title: "Emergency Procedures", description: "What to do in case of emergency", category: "Safety", views: 450 }
              ].map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{article.views} views</span>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Requests Tab */}
          <TabsContent value="requests" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">My Requests</h2>
                <p className="text-slate-500 dark:text-slate-400">Track your submitted requests</p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Request
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 dark:bg-slate-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Request
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Priority
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Created
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                      {[
                        { id: "REQ001", title: "IT Support - Laptop Issue", status: "In Progress", priority: "High", created: "2024-01-15" },
                        { id: "REQ002", title: "Office Supplies Order", status: "Completed", priority: "Medium", created: "2024-01-14" },
                        { id: "REQ003", title: "Time Off Request", status: "Approved", priority: "Low", created: "2024-01-13" },
                        { id: "REQ004", title: "Access Request - New System", status: "Pending", priority: "Medium", created: "2024-01-12" }
                      ].map((request, index) => (
                        <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-slate-900 dark:text-white">
                                {request.title}
                              </div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                {request.id}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge variant={request.status === "Completed" ? "default" : request.status === "In Progress" ? "secondary" : "outline"}>
                              {request.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge variant={request.priority === "High" ? "destructive" : request.priority === "Medium" ? "secondary" : "outline"}>
                              {request.priority}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                            {request.created}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src="/placeholder-avatar.jpg" />
                        <AvatarFallback className="text-lg">JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-semibold">John Doe</h3>
                        <p className="text-slate-500 dark:text-slate-400">Software Engineer</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">john.doe@company.com</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">Quick Stats</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-500 dark:text-slate-400">Total Requests</span>
                          <span className="text-sm font-medium">60</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-500 dark:text-slate-400">Completed</span>
                          <span className="text-sm font-medium">48</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-500 dark:text-slate-400">Pending</span>
                          <span className="text-sm font-medium">12</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full mt-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full mt-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                        <input
                          type="email"
                          defaultValue="john.doe@company.com"
                          className="w-full mt-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
                        <input
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                          className="w-full mt-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800"
                        />
                      </div>
                    </div>
                    <Button className="w-full">
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                    <CardDescription>Customize your experience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">Email Notifications</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Receive email updates about your requests</p>
                      </div>
                      <Button variant="outline" size="sm">Toggle</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">Dark Mode</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Use dark theme</p>
                      </div>
                      <Button variant="outline" size="sm">Toggle</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
