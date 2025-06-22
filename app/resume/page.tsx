"use client";

import {
  Calendar,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

// Type definitions
interface SkillCategoryProps {
  title: string;
  skills: string;
}

interface JobExperienceProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  technologies: string;
  responsibilities: string[];
}

interface EducationItemProps {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  percentage: string;
}

const Resume = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          .no-print {
            display: none !important;
          }
          .print-break {
            page-break-before: always;
          }
          .print-avoid {
            page-break-inside: avoid;
          }
        }
        @page {
          margin: 0.5in;
          size: A4;
        }
      `}</style>

      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg print:shadow-none print:p-0">
        {/* Header */}
        <header className="text-center mb-8 print-avoid">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Hitesh Sisara
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">Tech Lead</h2>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Mail size={14} className="text-blue-600" />
              <a
                href="mailto:hitesh.sisara.dev@gmail.com"
                className="text-blue-600 hover:underline"
              >
                hitesh.sisara.dev@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={14} className="text-gray-500" />
              <span>+918849133537</span>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin size={14} className="text-blue-600" />
              <a
                href="https://www.linkedin.com/in/hitesh-sisara-59354a1b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Github size={14} className="text-gray-700" />
              <a
                href="https://github.com/Hitesh-Sisara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Globe size={14} className="text-green-600" />
              <a
                href="https://sisara.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Portfolio
              </a>
            </div>
          </div>

          {/* Personal Info */}
          <div className="text-sm text-gray-500 flex justify-center gap-4 flex-wrap">
            <span>
              <strong>DOB:</strong> 04/05/1998
            </span>
            <span>
              <strong>Gender:</strong> Male
            </span>
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              <span>
                <strong>Location:</strong> Ahmedabad, Gujarat, India
              </span>
            </div>
          </div>

          <hr className="mt-6 border-gray-300" />
        </header>

        {/* Skills Section */}
        <section className="mb-8 print-avoid">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Skills
          </h2>

          <div className="grid gap-3">
            <SkillCategory
              title="Programming Languages & Frameworks"
              skills="Go (Golang), Node.js, TypeScript, Express.js, Flutter/Dart, React, Next.js"
            />
            <SkillCategory
              title="Cloud Platforms"
              skills="AWS (SageMaker, Bedrock, S3, Rekognition, Cognito, SES, SNS, EKS, API Gateway, Amplify, CloudFront, Lambda, OpenSearch, CloudWatch), Google Cloud Platform (GCS, Cloud Run, GKE, API Gateway)"
            />
            <SkillCategory
              title="DevOps & Infrastructure"
              skills="Kubernetes, Docker, GitLab CI/CD, Terraform, AWS CloudFormation, Apache Kafka"
            />
            <SkillCategory
              title="Databases"
              skills="PostgreSQL, Couchbase, CouchbaseLite, Vector Databases, Milvus"
            />
            <SkillCategory
              title="AI/ML Technologies"
              skills="MCP Server, Retrieval-Augmented Generation (RAG), AI Pipelines, Custom Model Training,AWS SageMaker & Bedrock, Gemini (Google AI APIs), Vortex AI Studio"
            />
            <SkillCategory
              title="Architecture"
              skills="Microservices, REST APIs, gRPC APIs, SDLC"
            />
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-8 print-section">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
            Work Experience
          </h2>

          <div className="space-y-6 print:space-y-4">
            <JobExperience
              title="Chief Technology Officer"
              company="Kamero.ai"
              duration="Apr 2025 – Present"
              location="Ahmedabad"
              type="Full-time"
              technologies="Next.js, Flutter, Golang, AWS, Google Cloud Platform, Kubernetes, AI/ML"
              responsibilities={[
                "Leading technology strategy and architecture decisions for AI-powered photo-sharing platform",
                "Overseeing development teams working with Next.js, Flutter, and Golang microservices",
                "Architecting scalable cloud infrastructure using AWS and Google Cloud Platform",
                "Driving AI/ML initiatives including custom model training and deployment pipelines",
                "Developed state-of-the-art, highly accurate (99%), scalable, and highly available face recognition solutions for large-scale deployment.",
              ]}
            />

            <JobExperience
              title="Tech Lead"
              company="Kamero.ai"
              duration="Apr 2024 – Mar 2025"
              location="Ahmedabad"
              type="Full-time"
              technologies="Next.js, Flutter, Golang, AWS, Google Cloud Platform, Kubernetes, Docker, AI/ML"
              responsibilities={[
                "Guided cross-functional development teams building AI-powered applications using Next.js, Flutter, and Golang",
                "Implemented comprehensive cloud infrastructure utilizing AWS services including SageMaker, S3, Rekognition, Cognito, SES, SNS, EKS, API Gateway, Amplify, CloudFront, and Lambda functions",
                "Architected Google Cloud solutions leveraging GCS, Cloud Run, GKE, and Google API Gateway",
                "Built and deployed microservices architecture with REST and gRPC APIs",
                "Established DevOps practices with Kubernetes, Docker, GitLab CI/CD pipelines, Terraform, and CloudFormation",
                "Developed custom AI pipelines using open-source models and integrated AWS SageMaker for model training",
                "Integrated vector databases (Milvus), OpenSearch, and traditional databases (Couchbase, CouchbaseLite, PostgreSQL)",
                "Integrated AI technologies including MTCNN, FaceNet, nearest neighbor search, and face recognition",
              ]}
            />

            <JobExperience
              title="Senior Software Engineer"
              company="Tata Consultancy Services"
              duration="Jun 2022 – Nov 2023"
              location="Remote"
              type="Full-time"
              technologies="React, Next.js, TypeScript, Node.js, Golang"
              responsibilities={[
                "Spearheaded the development of high-performance, scalable applications using Flutter, ensuring exceptional user experience on mobile platforms",
                "Led the architecture and implementation of server-side and client-side projects with Next.js and Golang, optimizing for speed, efficiency, and reliability",
                "Drove the adoption of best practices in code quality, security, and maintainability, reducing application downtime significantly and enhancing user satisfaction",
                "Mentored junior developers in coding best practices, modern development tools, and frameworks, enhancing team skills and project outcomes",
              ]}
            />

            <JobExperience
              title="Software Engineer"
              company="Tata Consultancy Services"
              duration="Aug 2019 – Jun 2022"
              location="Remote"
              type="Full-time"
              technologies="Flutter, React, Next.js, Node.js, Golang"
              responsibilities={[
                "Developed and maintained scalable applications utilizing Flutter, ensuring optimal performance and seamless user experience across mobile platforms",
                "Led the design and implementation of responsive web applications using React, TypeScript, and Next.js, focusing on robustness, speed, and cross-browser compatibility",
                "Engineered server-side logic and APIs with Golang and Node.js, enhancing application functionalities and integration capabilities",
                "Collaborated closely with cross-functional teams to define, design, and ship new features, adhering to agile methodologies and best coding practices",
              ]}
            />
          </div>
        </section>

        {/* Education */}
        <section className="mb-8 print-avoid">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
            Education
          </h2>

          <div className="space-y-4">
            <EducationItem
              degree="B.E: Computer Science and Engineering"
              institution="Maharaja Sayajirao University of Baroda"
              duration="Aug 2015 – Apr 2019"
              location="Vadodara, India"
              percentage="72%"
            />

            <EducationItem
              degree="11-12th Science: Physics, Chemistry, Maths"
              institution="P. P. Savani Vidhya Bhavan, Surat"
              duration="May 2013 – Mar 2015"
              location="Surat, India"
              percentage="83%"
            />
          </div>
        </section>

        {/* Languages */}
        <section className="print-avoid">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Languages
          </h2>

          <div className="flex gap-8 flex-wrap">
            <div className="text-gray-700">
              <strong>English</strong> (Full Professional Proficiency)
            </div>
            <div className="text-gray-700">
              <strong>Hindi</strong> (Professional Working Proficiency)
            </div>
            <div className="text-gray-700">
              <strong>Gujarati</strong> (Native)
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Skill Category Component
const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="mb-2">
    <div className="flex flex-col sm:flex-row sm:gap-4">
      <div className="font-semibold text-gray-800 min-w-fit sm:w-48 mb-1 sm:mb-0">
        {title}:
      </div>
      <div className="text-gray-600 flex-1">{skills}</div>
    </div>
  </div>
);

// Job Experience Component
const JobExperience = ({
  title,
  company,
  duration,
  location,
  type,
  technologies,
  responsibilities,
}: JobExperienceProps) => (
  <div className="print-compact">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="text-gray-600">
          <span className="font-medium">{company}</span> • {type} • {location}
        </div>
      </div>
      <div className="text-sm text-gray-500 flex items-center gap-1">
        <Calendar size={12} />
        {duration}
      </div>
    </div>

    <div className="text-sm text-gray-600 mb-3 italic">
      <strong>Technologies:</strong> {technologies}
    </div>

    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm print:space-y-0 print:leading-tight">
      {responsibilities.map((resp, index) => (
        <li key={index} className="print:mb-1">
          {resp}
        </li>
      ))}
    </ul>
  </div>
);

// Education Component
const EducationItem = ({
  degree,
  institution,
  duration,
  location,
  percentage,
}: EducationItemProps) => (
  <div className="print-avoid">
    <div className="flex justify-between items-start mb-1">
      <div>
        <h3 className="font-semibold text-gray-900">{degree}</h3>
        <div className="text-gray-600">
          <span className="font-medium">{institution}</span> • {location}
        </div>
      </div>
      <div className="text-sm text-gray-500">{duration}</div>
    </div>
    <div className="text-sm text-gray-600">
      <strong>Aggregate Percentage:</strong> {percentage}
    </div>
  </div>
);

export default Resume;
