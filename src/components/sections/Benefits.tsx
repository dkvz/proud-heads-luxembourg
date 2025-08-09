import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Sun, Clock, Zap, Droplets, Wind } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: Sun,
      title: "Brillance Naturelle",
      description: "Votre crâne capte et reflète la lumière, créant un halo de sagesse visible de loin."
    },
    {
      icon: Clock,
      title: "Gain de Temps",
      description: "Fini les heures passées chez le coiffeur ! Plus de temps pour les choses importantes."
    },
    {
      icon: Zap,
      title: "Aérodynamisme",
      description: "Réduction de la résistance au vent pour une efficacité optimale dans tous vos déplacements."
    },
    {
      icon: Droplets,
      title: "Économies Substantielles",
      description: "Plus de shampooing, de gel ou de produits capillaires. Votre portefeuille vous remercie."
    },
    {
      icon: Wind,
      title: "Liberté Totale",
      description: "Aucun 'mauvais jour cheveux' possible. Chaque jour est un jour parfait."
    },
    {
      icon: CheckCircle,
      title: "Authenticité",
      description: "Assumez votre vraie nature sans artifice. L'authenticité est la plus belle des parures."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gold/5 to-noble/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Les{" "}
            <span className="bg-gradient-noble bg-clip-text text-transparent">
              Avantages
            </span>{" "}
            de la Calvitie
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">
            Découvrez pourquoi la calvitie n'est pas une perte, mais un gain précieux
            que nous célébrons chaque jour avec fierté et reconnaissance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-noble/20 hover:border-noble/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/90 backdrop-blur-sm group"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-noble rounded-full flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-noble transition-colors">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-gold rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-noble mb-4">
              Fait Scientifique Établi
            </h3>
            <p className="text-xl text-noble/80 leading-relaxed">
              Selon une étude de l'Université de Pennsylvanie, les hommes chauves sont
              perçus comme <strong>13% plus dominants</strong> et <strong>6% plus confiants</strong>
              que leurs homologues chevelus. La science confirme ce que nous savons déjà !
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}