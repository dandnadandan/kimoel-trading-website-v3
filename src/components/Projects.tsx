import React from 'react';
import { MapPin, Award, Clock } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue-dark mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            FIRSTANK has successfully delivered water storage solutions across the Philippines, 
            serving industrial complexes, commercial establishments, and residential communities. 
            Our projects demonstrate our commitment to quality, reliability, and customer satisfaction.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue-dark mb-2">500+</h3>
              <p className="text-muted-foreground">Completed Projects</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue-dark mb-2">50+</h3>
              <p className="text-muted-foreground">Cities Served</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue-dark mb-2">15+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;