"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TestColorsPage() {
  return (
    <div className="min-h-screen p-8 space-y-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-800/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-800/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-100 mb-4">
            Color System
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Clean and modern design system with elegant components
          </p>
        </div>

        {/* Simplified Card Test */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-slate-800/50 border-slate-700">
            <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-t-xl p-6">
              <CardTitle className="text-xl">Primary Card</CardTitle>
              <CardDescription className="text-slate-300">
                Clean and simple design
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-300 leading-relaxed">
                This card demonstrates our clean color scheme with subtle hover effects.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-slate-800/50 border-slate-700">
            <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-t-xl p-6">
              <CardTitle className="text-xl">Secondary Card</CardTitle>
              <CardDescription className="text-slate-300">
                Consistent styling
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-300 leading-relaxed">
                Each card maintains visual consistency while being elegant and simple.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-slate-800/50 border-slate-700">
            <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-t-xl p-6">
              <CardTitle className="text-xl">Accent Card</CardTitle>
              <CardDescription className="text-slate-300">
                Subtle interactions
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-300 leading-relaxed">
                Clean design with smooth transitions and professional appearance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Simplified Button Tests */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-100 mb-6">
              Button Variants
            </h2>
            <p className="text-slate-400 mb-8">Clean buttons with subtle hover effects</p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button variant="default" className="text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Default Button
            </Button>
            <Button variant="secondary" className="text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Secondary Button
            </Button>
            <Button variant="destructive" className="text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Destructive Button
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-2">
              Outline Button
            </Button>
            <Button variant="ghost" className="text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Ghost Button
            </Button>
            <Button variant="link" className="text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Link Button
            </Button>
          </div>
        </div>

        {/* Simplified Input Test */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-100 mb-6">
              Input Fields
            </h2>
            <p className="text-slate-400 mb-8">Clean input fields with focus effects</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="space-y-3">
              <label className="text-lg font-semibold text-slate-200 block">Email Input</label>
              <Input 
                placeholder="Enter your email here..." 
                className="text-lg py-4 border-2 border-slate-600 focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 rounded-lg transition-all duration-300 bg-slate-800 text-slate-100"
              />
            </div>
            <div className="space-y-3">
              <label className="text-lg font-semibold text-slate-200 block">Password Input</label>
              <Input 
                type="password"
                placeholder="Enter your password..." 
                className="text-lg py-4 border-2 border-slate-600 focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 rounded-lg transition-all duration-300 bg-slate-800 text-slate-100"
              />
            </div>
            <div className="space-y-3">
              <label className="text-lg font-semibold text-slate-200 block">Search Input</label>
              <Input 
                placeholder="Search for something..." 
                className="text-lg py-4 border-2 border-slate-600 focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 rounded-lg transition-all duration-300 bg-slate-800 text-slate-100"
              />
            </div>
          </div>
        </div>

        {/* Simplified Color Palette Display */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-100 mb-6">
              Color Palette
            </h2>
            <p className="text-slate-400 mb-8">Our clean color system</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-lg bg-primary shadow-md"></div>
              <p className="text-sm font-medium text-slate-200">Primary</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-lg bg-secondary shadow-md"></div>
              <p className="text-sm font-medium text-slate-200">Secondary</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-lg bg-destructive shadow-md"></div>
              <p className="text-sm font-medium text-slate-200">Destructive</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-lg bg-accent shadow-md"></div>
              <p className="text-sm font-medium text-slate-200">Accent</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-lg bg-muted shadow-md"></div>
              <p className="text-sm font-medium text-slate-200">Muted</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-lg bg-card border-2 border-border shadow-md"></div>
              <p className="text-sm font-medium text-slate-200">Card</p>
            </div>
          </div>
        </div>

        {/* Simplified Design Info */}
        <Card className="max-w-4xl mx-auto bg-slate-800/50 border-slate-700">
          <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-t-xl p-8 text-center">
            <CardTitle className="text-3xl">Design System</CardTitle>
          </CardHeader>
          <CardContent className="pt-8 p-8">
            <p className="text-slate-300 text-xl leading-relaxed text-center">
              This page showcases our clean and professional design system. The colors are carefully chosen for 
              optimal readability and visual appeal. Each component features subtle animations and elegant styling 
              for a professional user experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
