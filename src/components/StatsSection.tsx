import { useEffect, useState, useRef } from "react";
import { CheckCircle, PartyPopper, Star, Users, Rocket } from "lucide-react";

const stats = [
  {
    icon: CheckCircle,
    value: 500,
    suffix: "+",
    label: "Verified Artists",
    color: "text-green-500",
  },
  {
    icon: PartyPopper,
    value: 1200,
    suffix: "+",
    label: "Events Completed",
    color: "text-purple-500",
  },
  {
    icon: Star,
    value: 4.8,
    suffix: "/5",
    label: "Average Rating",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Customers Served",
    color: "text-blue-500",
  },
  {
    icon: Rocket,
    value: 3,
    suffix: "+",
    label: "Years Active",
    color: "text-orange-500",
  },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
}

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(stat.value, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-card rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-smooth text-center"
    >
      <div className="flex justify-center mb-4">
        <div className={`p-3 rounded-full bg-accent/10 ${stat.color}`}>
          <stat.icon className="h-8 w-8" />
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
        {isVisible ? (
          <>
            {stat.value === 4.8 ? count / 10 : count}
            <span className="text-accent">{stat.suffix}</span>
          </>
        ) : (
          "0"
        )}
      </div>
      <p className="text-muted-foreground font-medium">{stat.label}</p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers and talented artists who trust our platform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}