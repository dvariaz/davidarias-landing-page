import { ProjectCardSkeleton } from "@/modules/projects/components/ProjectCard";

const ProjectGridSkeleton = () => {
  return (
      <div className="project-grid__body">
          <div className="flex justify-center items-center text-white absolute z-10 w-full h-full pt-0 px-8 pb-12 md:py-0 md:px-8">
              <p className="text-center">Hubo un problema al cargar los proyectos, vuelve más tarde</p>
          </div>

          <div className="project-grid__track">
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
          </div>
      </div>
  );
};

export default ProjectGridSkeleton;
