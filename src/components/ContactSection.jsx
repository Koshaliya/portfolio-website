import { Linkedin, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-primary">Information</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Say hello! I’d love to connect and chat about technology and projects!
        </p>

        <div className="flex justify-center">
          <div className="space-y-8">
            {/* <h3 className="text-2xl font-semibold mb-6 text-center">
              Contact Information
            </h3> */}

            <div className="space-y-6 justify-center item-center text-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:skoshi36@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    skoshi36@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-13">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/koshaliyas/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                  >
                    Profile Link
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-9">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Sunderland, UK
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
