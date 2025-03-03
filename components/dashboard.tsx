"use client"

import { useState, useEffect } from "react"
import { Bell, ChevronDown, Layout, LogOut, Menu, Moon, Search, Settings, Sun, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Verificar si dark mode está activo cuando se carga la página
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setIsDarkMode(isDark)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    document.documentElement.classList.toggle("dark", newMode)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="border-b bg-card dark:bg-gray-800 sticky top-0 z-10">
        <div className="flex h-16 items-center px-4 md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="dark:bg-gray-800">
              <MobileNav />
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2 md:hidden">
            <Layout className="h-6 w-6" />
            <span className="font-semibold">Mi Dashboard</span>
          </div>
          <div className="hidden md:flex md:items-center md:gap-2">
            <Layout className="h-6 w-6" />
            <span className="font-semibold">Mi Dashboard</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <form className="hidden md:flex relative group">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar..."
                className="w-56 rounded-lg pl-8 bg-background dark:bg-gray-700"
              />
            </form>
            <Button variant="outline" size="icon" className="rounded-full" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Cambiar modo oscuro</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notificaciones</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <img
                src="/placeholder.svg?height=32&width=32"
                width={32}
                height={32}
                alt="Avatar"
                className="rounded-full"
              />
              <span className="sr-only">Perfil</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:flex w-56 flex-col bg-card dark:bg-gray-800 border-r">
          <nav className="grid gap-1 p-4 text-sm font-medium">
            <Button variant="ghost" className="justify-start">
              <Layout className="mr-2 h-5 w-5" />
              Dashboard
            </Button>
            <Button variant="ghost" className="justify-start">
              <Users className="mr-2 h-5 w-5" />
              Usuarios
            </Button>
            <Button variant="ghost" className="justify-start">
              <Settings className="mr-2 h-5 w-5" />
              Ajustes
            </Button>
          </nav>
          <div className="mt-auto p-4">
            <Button variant="ghost" className="w-full justify-start">
              <LogOut className="mr-2 h-5 w-5" />
              Cerrar sesión
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Usuarios</CardTitle>
                <CardDescription>Usuarios registrados este mes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,234</div>
                <p className="text-green-500 flex items-center">+12% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Ingresos</CardTitle>
                <CardDescription>Ingresos totales del mes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$34,567</div>
                <p className="text-green-500 flex items-center">+8% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Actividad</CardTitle>
                <CardDescription>Usuarios activos hoy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">789</div>
                <p className="text-red-500 flex items-center">-3% desde ayer</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Usuarios Recientes</CardTitle>
                  <Button variant="outline" size="sm">
                    Ver todos
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                      <img
                        src={`/placeholder.svg?height=40&width=40&text=${i}`}
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt={`Usuario ${i}`}
                      />
                      <div className="grid gap-1">
                        <p className="font-medium">Usuario {i}</p>
                        <p className="text-sm text-muted-foreground">usuario{i}@ejemplo.com</p>
                      </div>
                      <div className="ml-auto flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Ver
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

// Componente de navegación móvil
function MobileNav() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 pb-4 border-b mb-4">
        <Layout className="h-6 w-6" />
        <span className="font-semibold">Mi Dashboard</span>
      </div>
      <nav className="grid gap-2 text-sm font-medium">
        <Button variant="ghost" className="justify-start">
          <Layout className="mr-2 h-5 w-5" />
          Dashboard
        </Button>
        <Button variant="ghost" className="justify-start">
          <Users className="mr-2 h-5 w-5" />
          Usuarios
        </Button>
        <Button variant="ghost" className="justify-start">
          <Settings className="mr-2 h-5 w-5" />
          Ajustes
        </Button>
      </nav>
      <div className="mt-auto pb-4">
        <Button variant="ghost" className="w-full justify-start">
          <LogOut className="mr-2 h-5 w-5" />
          Cerrar sesión
        </Button>
      </div>
    </div>
  )
}

