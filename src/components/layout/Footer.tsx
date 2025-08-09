import { Crown, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-noble text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Crown className="w-8 h-8 text-gold mr-3" />
              <h3 className="text-2xl font-bold">Confrérie des Chauves</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Depuis 1999, nous célébrons la calvitie comme un symbole de distinction,
              de sagesse et d'élégance. Rejoignez notre communauté d'exception
              au cœur du Grand-Duché de Luxembourg.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold-light transition-colors cursor-pointer">
                <span className="text-noble font-bold text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold-light transition-colors cursor-pointer">
                <span className="text-noble font-bold text-sm">in</span>
              </div>
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold-light transition-colors cursor-pointer">
                <span className="text-noble font-bold text-sm">ig</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-gold transition-colors">À Propos</a></li>
              <li><a href="#benefits" className="text-white/80 hover:text-gold transition-colors">Avantages</a></li>
              <li><a href="#membership" className="text-white/80 hover:text-gold transition-colors">Adhésion</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-gold transition-colors">Témoignages</a></li>
              <li><a href="#events" className="text-white/80 hover:text-gold transition-colors">Événements</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  12 Place Guillaume II<br />
                  L-1648 Luxembourg
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-white/80 text-sm">+352 26 12 34 56</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-white/80 text-sm">contact@chauves.lu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Confrérie des Chauves du Luxembourg. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                CGU
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}