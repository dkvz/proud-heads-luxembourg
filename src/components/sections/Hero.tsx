import { HeroButton } from "@/components/ui/hero-button"
import { Crown, Users, Star } from "lucide-react"
import heroImage from "@/assets/hero-brotherhood.jpg"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-float">
          <Crown className="w-20 h-20 text-gold mx-auto mb-8 animate-glow" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          Confrérie des{" "}
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            Chauves
          </span>
          <br />
          du Luxembourg
        </h1>
        
        <p className="text-xl md:text-2xl text-elegant mb-8 max-w-3xl mx-auto leading-relaxed">
          Nous portons notre calvitie avec fierté, élégance et distinction.
          Rejoignez une confrérie d'exception où la brillance de l'esprit
          égale celle du crâne.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <HeroButton variant="gold" size="xl" className="group">
            <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Rejoindre la Confrérie
          </HeroButton>
          
          <HeroButton variant="elegant" size="xl">
            <Star className="w-5 h-5" />
            Découvrir nos Valeurs
          </HeroButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-gold/20 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-gold mb-2">150+</div>
            <div className="text-muted-foreground">Membres Fiers</div>
          </div>
          
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-gold/20 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-gold mb-2">25</div>
            <div className="text-muted-foreground">Années d'Excellence</div>
          </div>
          
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-gold/20 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-gold mb-2">100%</div>
            <div className="text-muted-foreground">Satisfaction Capillaire</div>
          </div>
        </div>
      </div>
    </section>
  )
}