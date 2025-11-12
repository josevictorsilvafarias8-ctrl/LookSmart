"use client";

import { useState } from "react";
import { 
  Sparkles, 
  Camera, 
  ShoppingBag, 
  Shirt, 
  Scissors, 
  Heart,
  TrendingUp,
  MapPin,
  Palette,
  User,
  ChevronRight,
  Star,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LookSmartHome() {
  const [activeTab, setActiveTab] = useState("inicio");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200/60 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  LookSmart
                </h1>
                <p className="text-xs text-slate-500">Seu consultor de estilo</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <User className="w-4 h-4 mr-2" />
              Entrar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-amber-200 px-4 py-1.5 text-sm font-medium">
            ✨ Powered by AI
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Descubra Seu Estilo
            <span className="block bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Com Inteligência Artificial
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Análise de rosto, recomendações personalizadas de looks, cortes de cabelo e lojas próximas. 
            Tudo em um só lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
            >
              <Camera className="w-5 h-5 mr-2" />
              Analisar Meu Rosto
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-slate-300 hover:border-amber-500 hover:bg-amber-50 text-slate-700 text-lg px-8 py-6 transition-all duration-300"
            >
              <Palette className="w-5 h-5 mr-2" />
              Descobrir Meu Estilo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Funcionalidades Principais
            </h3>
            <p className="text-slate-600 text-lg">
              Tudo que você precisa para transformar seu visual
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="border-2 border-slate-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                  <Palette className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Análise de Estilo</CardTitle>
                <CardDescription className="text-slate-600">
                  Quiz interativo para descobrir seu estilo pessoal: streetwear, casual, social ou minimalista
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 2 */}
            <Card className="border-2 border-slate-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                  <Shirt className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Sugestões de Looks</CardTitle>
                <CardDescription className="text-slate-600">
                  Combinações perfeitas de roupas baseadas no seu estilo e clima da sua cidade
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 3 */}
            <Card className="border-2 border-slate-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center mb-4 shadow-lg">
                  <ShoppingBag className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Lojas e Marcas</CardTitle>
                <CardDescription className="text-slate-600">
                  Encontre onde comprar as peças sugeridas em lojas físicas e online
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 4 */}
            <Card className="border-2 border-slate-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4 shadow-lg">
                  <Camera className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Análise de Rosto IA</CardTitle>
                <CardDescription className="text-slate-600">
                  Identifique seu formato de rosto e receba recomendações de cortes de cabelo ideais
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 5 */}
            <Card className="border-2 border-slate-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-4 shadow-lg">
                  <Scissors className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Closet Digital</CardTitle>
                <CardDescription className="text-slate-600">
                  Fotografe suas roupas e receba sugestões de combinações com o que você já tem
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 6 */}
            <Card className="border-2 border-slate-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-4 shadow-lg">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Feed de Inspiração</CardTitle>
                <CardDescription className="text-slate-600">
                  Veja looks de influenciadores e compre as peças diretamente
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-slate-200 shadow-2xl bg-white">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-slate-900">
                Experimente Agora
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                Escolha uma funcionalidade para começar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-100 p-1 rounded-xl">
                  <TabsTrigger 
                    value="inicio" 
                    className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all duration-200"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Início
                  </TabsTrigger>
                  <TabsTrigger 
                    value="analise"
                    className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all duration-200"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Análise
                  </TabsTrigger>
                  <TabsTrigger 
                    value="looks"
                    className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all duration-200"
                  >
                    <Shirt className="w-4 h-4 mr-2" />
                    Looks
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="inicio" className="space-y-6">
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 border-2 border-amber-200">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">
                      Bem-vindo ao LookSmart! 👋
                    </h4>
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      Comece respondendo nosso quiz de estilo ou faça uma análise facial para receber 
                      recomendações personalizadas de roupas, cortes de cabelo e lojas.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-slate-700">Análise de rosto com IA em segundos</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-slate-700">Recomendações baseadas no seu estilo único</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-slate-700">Integração com lojas e e-commerce</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="analise" className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border-2 border-blue-200 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <Camera className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">
                      Análise Facial com IA
                    </h4>
                    <p className="text-slate-700 mb-6 max-w-md mx-auto">
                      Tire uma foto ou faça upload de uma imagem para identificar seu formato de rosto 
                      e receber recomendações de cortes de cabelo e barba.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg">
                        <Camera className="w-4 h-4 mr-2" />
                        Tirar Foto
                      </Button>
                      <Button variant="outline" className="border-2 border-blue-300 hover:bg-blue-50">
                        Fazer Upload
                      </Button>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Card className="border-2 border-slate-200 bg-white">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                            <Scissors className="w-5 h-5 text-purple-600" />
                          </div>
                          <h5 className="font-semibold text-slate-900">Formato Oval</h5>
                        </div>
                        <p className="text-sm text-slate-600">
                          Cortes recomendados: undercut, pompadour, franja lateral
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-slate-200 bg-white">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center">
                            <Scissors className="w-5 h-5 text-pink-600" />
                          </div>
                          <h5 className="font-semibold text-slate-900">Formato Quadrado</h5>
                        </div>
                        <p className="text-sm text-slate-600">
                          Cortes recomendados: quiff, side part, textured crop
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="looks" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Look Card 1 */}
                    <Card className="border-2 border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
                      <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                        <Shirt className="w-20 h-20 text-white/20 absolute" />
                        <Badge className="absolute top-4 right-4 bg-amber-500 text-white">
                          Casual
                        </Badge>
                      </div>
                      <CardContent className="pt-6">
                        <h5 className="font-bold text-lg text-slate-900 mb-2">Look Casual Urbano</h5>
                        <p className="text-sm text-slate-600 mb-4">
                          Camiseta básica + calça jeans + tênis branco
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4 text-slate-400" />
                            <span className="text-sm text-slate-600">234 curtidas</span>
                          </div>
                          <Button size="sm" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                            Ver Lojas
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Look Card 2 */}
                    <Card className="border-2 border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
                      <div className="h-48 bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center relative overflow-hidden">
                        <Shirt className="w-20 h-20 text-white/20 absolute" />
                        <Badge className="absolute top-4 right-4 bg-blue-500 text-white">
                          Social
                        </Badge>
                      </div>
                      <CardContent className="pt-6">
                        <h5 className="font-bold text-lg text-slate-900 mb-2">Look Social Elegante</h5>
                        <p className="text-sm text-slate-600 mb-4">
                          Camisa social + calça alfaiataria + sapato social
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4 text-slate-400" />
                            <span className="text-sm text-slate-600">189 curtidas</span>
                          </div>
                          <Button size="sm" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                            Ver Lojas
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 mb-2">Lojas Próximas</h5>
                          <p className="text-sm text-slate-700 mb-3">
                            Encontre essas peças em lojas perto de você:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className="bg-white">Zara - 2km</Badge>
                            <Badge variant="secondary" className="bg-white">Renner - 3km</Badge>
                            <Badge variant="secondary" className="bg-white">C&A - 4km</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl my-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Junte-se a Milhares de Usuários
            </h3>
            <p className="text-slate-300 text-lg">
              Transformando o estilo pessoal com tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">50K+</div>
              <p className="text-slate-300">Análises de Rosto</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">200K+</div>
              <p className="text-slate-300">Looks Criados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">98%</div>
              <p className="text-slate-300">Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 via-white to-amber-50 shadow-2xl max-w-4xl mx-auto">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Pronto Para Transformar Seu Estilo?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Comece agora gratuitamente e descubra looks incríveis personalizados para você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Começar Gratuitamente
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-slate-300 hover:border-amber-500 hover:bg-amber-50 text-slate-700 text-lg px-8 py-6"
              >
                Saber Mais
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">LookSmart</span>
              </div>
              <p className="text-slate-400 text-sm">
                Seu consultor de estilo pessoal com inteligência artificial
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Análise de Rosto</li>
                <li>Sugestões de Looks</li>
                <li>Closet Digital</li>
                <li>Feed de Inspiração</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Sobre Nós</li>
                <li>Blog</li>
                <li>Carreiras</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Privacidade</li>
                <li>Termos de Uso</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© 2024 LookSmart. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
