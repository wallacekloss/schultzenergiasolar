import { useState } from "react";
import { MapPin, Zap, Home, Building2, Tractor } from "lucide-react";

type FilterType = "todos" | "residencial" | "comercial" | "agronegocio";

const projects = [
  {
    id: 1,
    type: "residencial" as const,
    title: "Residência Premium",
    location: "Linhares, ES",
    power: "8.5 kWp",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    type: "comercial" as const,
    title: "Empresa de Logística",
    location: "Vitória, ES",
    power: "75 kWp",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    type: "residencial" as const,
    title: "Casa de Campo",
    location: "Colatina, ES",
    power: "12 kWp",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    type: "comercial" as const,
    title: "Galpão Industrial",
    location: "Serra, ES",
    power: "250 kWp",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    type: "residencial" as const,
    title: "Condomínio Fechado",
    location: "Aracruz, ES",
    power: "15 kWp",
    image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    type: "comercial" as const,
    title: "Centro Comercial",
    location: "Cachoeiro de Itapemirim, ES",
    power: "180 kWp",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
  },
];

const filters: { value: FilterType; label: string; icon: typeof Home }[] = [
  { value: "todos", label: "Todos", icon: Zap },
  { value: "residencial", label: "Residencial", icon: Home },
  { value: "comercial", label: "Comercial", icon: Building2 },
  { value: "agronegocio", label: "Agronegócio", icon: Tractor },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("todos");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "todos" || project.type === activeFilter
  );

  return (
    <section id="projetos" className="section-padding bg-background">
      <div className="container-max mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Portfólio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Projetos realizados
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça alguns dos mais de 150 projetos que já realizamos em 
            residências e empresas de todo o Espírito Santo.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground shadow-cta"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <filter.icon className="h-4 w-4" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-medium transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Zap className="h-4 w-4" />
                  <span className="font-semibold">{project.power}</span>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.type === "residencial"
                    ? "bg-blue-500/90 text-white"
                    : project.type === "comercial"
                    ? "bg-green-500/90 text-white"
                    : "bg-amber-600/90 text-white"
                }`}>
                  {project.type === "residencial" ? "Residencial" : project.type === "comercial" ? "Comercial" : "Agronegócio"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
