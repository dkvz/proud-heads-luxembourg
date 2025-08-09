import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Jean-Claude Müller",
      title: "Grand Maître depuis 2010",
      content: "Rejoindre cette confrérie a changé ma vie. J'ai appris à transformer ma calvitie en véritable atout professionnel et personnel. Aujourd'hui, je dirige une entreprise florissante et j'inspire mes équipes par ma confiance en moi.",
      rating: 5
    },
    {
      name: "Pierre Hoffmann",
      title: "Chevalier actif",
      content: "L'entraide et la fraternité de cette communauté sont exceptionnelles. Nous nous soutenons mutuellement dans tous les aspects de la vie. C'est bien plus qu'un club, c'est une famille.",
      rating: 5
    },
    {
      name: "Marc Weber",
      title: "Nouveau membre enthousiaste",
      content: "Après des années de complexes, j'ai enfin trouvé ma place. Les conseils en image et en confiance en soi m'ont permis de décrocher la promotion que je visais depuis longtemps.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-noble/5 to-gold/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Témoignages de{" "}
            <span className="bg-gradient-noble bg-clip-text text-transparent">
              Nos Membres
            </span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">
            Découvrez comment la confrérie a transformé la vie de nos membres
            et les a aidés à embrasser leur calvitie avec fierté.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/90 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-gold/30" />
              </div>
              
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-gold/20 pt-4">
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-gold">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-noble rounded-lg p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-3xl font-bold mb-4">
              Une Satisfaction à 100%
            </h3>
            <p className="text-xl opacity-90 leading-relaxed mb-6">
              Depuis 25 ans, aucun membre n'a jamais regretté d'avoir rejoint notre confrérie.
              Nos valeurs de respect, d'entraide et de fierté créent une communauté
              unique où chacun trouve sa place et s'épanouit pleinement.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold">100%</div>
                <div className="text-sm opacity-80">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold">25</div>
                <div className="text-sm opacity-80">Années</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold">150+</div>
                <div className="text-sm opacity-80">Membres Actifs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}