import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Heart, Trophy, Sparkles } from "lucide-react"
import brotherhoodImage from "@/assets/brotherhood-unity.jpg"

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Dignité",
      description: "Nous transformons ce que certains considèrent comme une faiblesse en symbole de force et de caractère."
    },
    {
      icon: Heart,
      title: "Fraternité",
      description: "Une communauté unie par l'acceptation de soi et le soutien mutuel entre membres."
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Nous excellons dans tous les domaines, prouvant que la calvitie n'est qu'un atout de plus."
    },
    {
      icon: Sparkles,
      title: "Éclat",
      description: "Nos crânes brillent de mille feux, reflétant notre confiance et notre joie de vivre."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            À Propos de Notre{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Noble Confrérie
            </span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">
            Fondée en 1999 au cœur du Luxembourg, notre confrérie rassemble des hommes
            et des femmes qui ont choisi de célébrer leur calvitie comme un signe de
            sagesse, de maturité et d'élégance naturelle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={brotherhoodImage} 
              alt="Membres de la confrérie unis dans la fraternité"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Une Tradition d'Excellence
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Depuis plus de deux décennies, nous réunissons les esprits les plus brillants
              du Grand-Duché. Notre confrérie n'est pas seulement un groupe social, c'est
              une famille unie par des valeurs communes et une vision partagée de l'élégance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chaque membre apporte sa propre expertise, créant un réseau d'entraide
              exceptionnel où business, culture et amitié se mélangent harmonieusement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-noble" />
                </div>
                <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}