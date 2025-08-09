import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroButton } from "@/components/ui/hero-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Crown, Users, Gift, Calendar } from "lucide-react"

export function Membership() {
  const tiers = [
    {
      name: "Aspirant",
      price: "50€",
      period: "/an",
      icon: Users,
      features: [
        "Accès aux événements publics",
        "Newsletter mensuelle",
        "Badge membre en bronze",
        "Accès au forum communautaire"
      ]
    },
    {
      name: "Chevalier",
      price: "120€",
      period: "/an",
      icon: Gift,
      popular: true,
      features: [
        "Tous les avantages Aspirant",
        "Invitation aux soirées privées",
        "Badge membre en argent",
        "Kit d'entretien crâne premium",
        "Consultation style personnalisée"
      ]
    },
    {
      name: "Grand Maître",
      price: "250€",
      period: "/an",
      icon: Crown,
      features: [
        "Tous les avantages Chevalier",
        "Accès VIP à tous les événements",
        "Badge membre en or",
        "Concierge service personnel",
        "Voyage annuel de la confrérie"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background to-noble/5">
      <div className="container mx-auto px-4">
        {/* Membership Tiers */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Rejoindre Notre{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Confrérie
            </span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">
            Choisissez le niveau d'engagement qui vous correspond et découvrez
            tous les privilèges réservés aux membres de notre noble assemblée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                tier.popular 
                  ? 'border-gold bg-gradient-to-br from-gold/10 to-noble/10' 
                  : 'border-noble/20 hover:border-noble/40'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-gold text-noble px-4 py-2 rounded-full text-sm font-bold">
                    Plus Populaire
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  tier.popular ? 'bg-gradient-gold' : 'bg-gradient-noble'
                }`}>
                  <tier.icon className={`w-8 h-8 ${tier.popular ? 'text-noble' : 'text-white'}`} />
                </div>
                <CardTitle className="text-2xl text-foreground">{tier.name}</CardTitle>
                <div className="text-3xl font-bold text-gold">
                  {tier.price}
                  <span className="text-lg text-muted-foreground">{tier.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <Crown className="w-4 h-4 text-gold mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <HeroButton 
                  variant={tier.popular ? "gold" : "noble"} 
                  size="lg" 
                  className="w-full mt-6"
                >
                  Choisir {tier.name}
                </HeroButton>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-gold/20 bg-card/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
              <CardTitle className="text-3xl text-foreground mb-2">
                Candidature Spontanée
              </CardTitle>
              <p className="text-muted-foreground">
                Présentez-vous et rejoignez notre communauté d'exception
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Prénom
                  </label>
                  <Input placeholder="Votre prénom" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nom
                  </label>
                  <Input placeholder="Votre nom" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="votre.email@exemple.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Parlez-nous de votre parcours calvitie
                </label>
                <Textarea 
                  placeholder="Quand avez-vous embrassé votre calvitie ? Qu'est-ce qui vous motive à rejoindre notre confrérie ?"
                  rows={4}
                />
              </div>
              
              <HeroButton variant="gold" size="lg" className="w-full">
                <Users className="w-5 h-5" />
                Soumettre ma Candidature
              </HeroButton>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}