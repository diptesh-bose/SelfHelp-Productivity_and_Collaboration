import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Cloud, 
  FileText, 
  List, 
  Share2, 
  Search, 
  Zap, 
  Layers, 
  Smartphone, 
  Megaphone,
  BookOpen,
  Globe,
  Users,
  Lock,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Settings,
  Database,
  Link,
  Mail,
  Calendar,
  BarChart3,
  Eye,
  Edit,
  Shield,
  Filter,
  Upload,
  FolderOpen,
  MessageSquare
} from "lucide-react"

export default function SharePointGuide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Cloud className="h-16 w-16 md:h-20 md:w-20" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              SharePoint Online Self-Help Guide
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 text-pretty">
              Your comprehensive resource for mastering SharePoint Online—collaboration, document management, and automation made simple.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-lg" asChild>
                <a href="#getting-started">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10 bg-transparent" asChild>
                <a href="#tutorials">View Tutorials</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Navigation */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex overflow-x-auto gap-2 md:gap-4 pb-2 md:pb-0">
            <Button variant="ghost" size="sm" asChild className="whitespace-nowrap">
              <a href="#getting-started">Getting Started</a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="whitespace-nowrap">
              <a href="#sites-pages">Sites & Pages</a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="whitespace-nowrap">
              <a href="#document-management">Documents</a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="whitespace-nowrap">
              <a href="#lists-forms">Lists & Forms</a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="whitespace-nowrap">
              <a href="#collaboration">Collaboration</a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="whitespace-nowrap">
              <a href="#search">Search</a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="whitespace-nowrap">
              <a href="#automation">Automation</a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="whitespace-nowrap">
              <a href="#integration">Integration</a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="whitespace-nowrap">
              <a href="#mobile">Mobile</a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="whitespace-nowrap">
              <a href="#tutorials">Tutorials</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-600">Getting Started</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Welcome to SharePoint Online</h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                SharePoint Online is your organization's cloud-based platform for collaboration, document management, and information sharing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Microsoft 365 Portal</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Sign in at office.com and click the SharePoint icon from the app launcher
                  </p>
                  <Badge variant="outline">Most Common</Badge>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Link className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Direct URL</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Navigate to your organization's SharePoint home page
                  </p>
                  <Badge variant="outline">Direct Access</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sites & Pages Section */}
      <section id="sites-pages" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-indigo-600">Sites & Pages</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Build Your Digital Workspace</h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Create beautiful, functional sites and pages to organize your team's work.
              </p>
            </div>

            <Tabs defaultValue="team" className="mb-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="team">Team Sites</TabsTrigger>
                <TabsTrigger value="communication">Communication Sites</TabsTrigger>
                <TabsTrigger value="hub">Hub Sites</TabsTrigger>
              </TabsList>
              
              <TabsContent value="team" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Team Sites
                    </CardTitle>
                    <CardDescription>Perfect for team collaboration and project work</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Best For:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                          <span>Small teams working on shared projects</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                          <span>Document collaboration and co-authoring</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="communication" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Megaphone className="h-5 w-5" />
                      Communication Sites
                    </CardTitle>
                    <CardDescription>Broadcast news and information across your organization</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Best For:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                          <span>Company-wide announcements and news</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                          <span>Department portals and information hubs</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hub" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Layers className="h-5 w-5" />
                      Hub Sites
                    </CardTitle>
                    <CardDescription>Connect related sites for unified navigation and branding</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Best For:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                          <span>Organizing multiple related sites</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                          <span>Consistent branding and navigation</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Document Management Section */}
      <section id="document-management" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-slate-700">Document Management</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Manage Documents with Confidence</h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Store, organize, and collaborate on documents with powerful version control.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Upload className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Upload & Organize</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>Drag and drop files</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>Create folders for structure</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Version Control</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Automatic version history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Restore previous versions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Co-Authoring</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                      <span>Real-time collaboration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                      <span>See who's editing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lists & Forms Section */}
      <section id="lists-forms" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-emerald-600">Lists & Forms</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Organize and Collect Data</h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                SharePoint lists are powerful tools for tracking information and managing tasks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-blue-100 rounded-lg w-fit mb-2">
                    <List className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Custom List</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Start from scratch and define your own columns
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-green-100 rounded-lg w-fit mb-2">
                    <FolderOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Document Library</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Store and manage files with metadata
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-purple-100 rounded-lg w-fit mb-2">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Task List</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Track project tasks and completion status
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="collaboration" className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-600">Collaboration</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Work Together Seamlessly</h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                SharePoint's collaboration features help teams stay connected and productive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Sharing & Permissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Share Options:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                        <span>Anyone with the link</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                        <span>People in your organization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                        <span>Specific people</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Comments & Mentions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                        <span>Add comments to documents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                        <span>@mention colleagues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                        <span>Email notifications</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-600">Search</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Find What You Need</h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                SharePoint's powerful search capabilities help you quickly locate information.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-orange-100 rounded-lg w-fit mb-2">
                    <Search className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Global Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Search across all SharePoint sites and content
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-blue-100 rounded-lg w-fit mb-2">
                    <Filter className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Smart Filters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Filter by file type, author, date, and location
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-green-100 rounded-lg w-fit mb-2">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">People Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Find colleagues and view their expertise
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section id="automation" className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-600">Automation</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Automate Your Workflows</h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Use Power Automate to create automated workflows that save time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Common Workflows
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Send notifications when documents are uploaded</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Create approval processes for content review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Automatically organize files into folders</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Getting Started
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Access from SharePoint list or library</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Choose from pre-built templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Test and deploy your workflow</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integration" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-indigo-600">Integration</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Connect Your Tools</h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                SharePoint integrates seamlessly with Microsoft 365 and third-party applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-2">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Microsoft Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access SharePoint files directly in Teams
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-2">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Outlook</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Save email attachments to SharePoint
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="p-3 bg-purple-100 rounded-lg w-fit mx-auto mb-2">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Power BI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Embed reports in SharePoint pages
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="p-3 bg-orange-100 rounded-lg w-fit mx-auto mb-2">
                    <FileText className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Office Apps</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Edit documents in Word, Excel, PowerPoint
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section id="mobile" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-slate-700">Mobile</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Work from Anywhere</h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Access your SharePoint content on the go with mobile apps.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5" />
                    SharePoint Mobile App
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-600 mt-0.5 shrink-0" />
                      <span>Browse sites and documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-600 mt-0.5 shrink-0" />
                      <span>Upload photos and files</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-600 mt-0.5 shrink-0" />
                      <span>View and edit Office documents</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Mobile Web Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-600 mt-0.5 shrink-0" />
                      <span>Responsive design for all devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-600 mt-0.5 shrink-0" />
                      <span>Touch-optimized interface</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-600 mt-0.5 shrink-0" />
                      <span>Full functionality in mobile browsers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-600">Tutorials</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Step-by-Step Guides</h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Follow these detailed tutorials to master SharePoint Online features.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-blue-100 rounded-lg w-fit mb-2">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Creating Your First Site</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Learn how to create a team site from scratch.
                  </p>
                  <Badge variant="outline">Beginner</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-green-100 rounded-lg w-fit mb-2">
                    <Upload className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Document Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Master file uploads and version control.
                  </p>
                  <Badge variant="outline">Beginner</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-purple-100 rounded-lg w-fit mb-2">
                    <List className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Building Custom Lists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Create and customize lists to track information.
                  </p>
                  <Badge variant="outline">Intermediate</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-orange-100 rounded-lg w-fit mb-2">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Power Automate Workflows</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Automate repetitive tasks with Power Automate.
                  </p>
                  <Badge variant="outline">Advanced</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-pink-100 rounded-lg w-fit mb-2">
                    <Eye className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-lg">Modern Page Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Design beautiful pages with modern web parts.
                  </p>
                  <Badge variant="outline">Intermediate</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-2">
                    <Shield className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">Security & Permissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Configure sharing settings and manage permissions.
                  </p>
                  <Badge variant="outline">Advanced</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Cloud className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4">SharePoint Online Self-Help Guide</h3>
            <p className="text-slate-300 mb-6">
              Your comprehensive resource for mastering SharePoint Online collaboration and productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <a href="#getting-started" className="hover:text-white transition-colors">Getting Started</a>
              <a href="#sites-pages" className="hover:text-white transition-colors">Sites & Pages</a>
              <a href="#document-management" className="hover:text-white transition-colors">Documents</a>
              <a href="#collaboration" className="hover:text-white transition-colors">Collaboration</a>
              <a href="#tutorials" className="hover:text-white transition-colors">Tutorials</a>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700 text-slate-400 text-sm">
              <p>&copy; 2024 SharePoint Online Self-Help Guide. Built with Next.js and Tailwind CSS.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}