"use client";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 font-sans text-gray-900 leading-relaxed print:p-6 print:max-w-none">
      {/* Header */}
      <header className="text-center mb-8 border-b-2 border-gray-800 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hitesh Sisara</h1>
        <h2 className="text-xl text-gray-700 font-semibold mb-4">Tech Lead</h2>

        <div className="text-sm text-gray-600 space-y-2">
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            <span>Email: hitesh.sisara.dev@gmail.com</span>
            <span>Phone: +918849133537</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <span>LinkedIn: linkedin.com/in/hitesh-sisara-59354a1b4</span>
            <span>GitHub: github.com/Hitesh-Sisara</span>
            <span>Portfolio: sisara.in</span>
          </div>
          <div className="text-xs text-gray-500 mt-3">
            DOB: 04/05/1998 | Gender: Male | Location: Ahmedabad, Gujarat, India
          </div>
        </div>
      </header>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-400 pb-2 mb-4">
          SKILLS
        </h3>

        <div className="space-y-3 text-sm">
          <div>
            <span className="font-semibold text-gray-800 inline-block w-56">
              Programming Languages & Frameworks:
            </span>
            <span className="text-gray-700">
              Go (Golang), Node.js, TypeScript, Node.js Express, Flutter/Dart,
              React, Next.js
            </span>
          </div>

          <div>
            <span className="font-semibold text-gray-800 inline-block w-56">
              Cloud Platforms:
            </span>
            <span className="text-gray-700">
              AWS (SageMaker, S3, Recognition, Cognito, SES, SNS, EKS, API
              Gateway, Amplify, CloudFront, Lambda, OpenSearch, CloudWatch),
              Google Cloud Platform (GCS, Cloud Run Functions, GKE, API Gateway)
            </span>
          </div>

          <div>
            <span className="font-semibold text-gray-800 inline-block w-56">
              DevOps & Infrastructure:
            </span>
            <span className="text-gray-700">
              Kubernetes, Docker, GitLab CI/CD, Terraform, AWS CloudFormation,
              Apache Kafka
            </span>
          </div>

          <div>
            <span className="font-semibold text-gray-800 inline-block w-56">
              Databases:
            </span>
            <span className="text-gray-700">
              PostgreSQL, Couchbase, CouchbaseLite, Vector Databases, Milvus
            </span>
          </div>

          <div>
            <span className="font-semibold text-gray-800 inline-block w-56">
              AI/ML Technologies:
            </span>
            <span className="text-gray-700">
              AWS SageMaker, Google Gemini APIs, Vortex AI Studio, RAG agents,
              Custom AI Pipeline Development, Prompt Engineering, MCP Servers,
              Ra Open Source Model Training
            </span>
          </div>

          <div>
            <span className="font-semibold text-gray-800 inline-block w-56">
              Architecture:
            </span>
            <span className="text-gray-700">
              Microservices, REST APIs, gRPC APIs, SDLC
            </span>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-400 pb-2 mb-4">
          WORK EXPERIENCE
        </h3>

        {/* CTO Role */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-gray-900">
              Chief Technology Officer
            </h4>
            <span className="text-sm text-gray-600">Apr 2025 - Present</span>
          </div>
          <div className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Kamero.ai</span> | Full-time |
            Ahmedabad
          </div>
          <div className="text-xs text-gray-600 italic mb-3">
            Technologies: Next.js, Flutter, Golang, AWS, Google Cloud Platform,
            Kubernetes, AI/ML
          </div>
          <ul className="text-sm text-gray-700 space-y-1 ml-4">
            <li>
              • Leading technology strategy and architecture decisions for
              AI-powered photo sharing platform
            </li>
            <li>
              • Overseeing development teams working with Next.js, Flutter, and
              Golang microservices
            </li>
            <li>
              • Architecting scalable cloud infrastructure using AWS and Google
              Cloud Platform
            </li>
            <li>
              • Driving AI/ML initiatives including custom model training and
              deployment pipelines
            </li>
            <li>
              • Managing cloud-native applications with Kubernetes, Docker, and
              CI/CD pipelines
            </li>
          </ul>
        </div>

        {/* Tech Lead Role */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-gray-900">Tech Lead</h4>
            <span className="text-sm text-gray-600">
              Apr 2024 - Mar 2025 | 11 months
            </span>
          </div>
          <div className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Kamero.ai</span> | Full-time |
            Ahmedabad
          </div>
          <div className="text-xs text-gray-600 italic mb-3">
            Technologies: Next.js, Flutter, Golang, AWS, Google Cloud Platform,
            Kubernetes, Docker, AI/ML
          </div>
          <ul className="text-sm text-gray-700 space-y-1 ml-4">
            <li>
              • Guided cross-functional development teams building AI-powered
              applications using Next.js, Flutter, and Golang
            </li>
            <li>
              • Implemented comprehensive cloud infrastructure utilizing AWS
              services including SageMaker, S3, Recognition, Cognito, SES, SNS,
              EKS, API Gateway, Amplify, CloudFront, and Lambda functions
            </li>
            <li>
              • Architected Google Cloud solutions leveraging GCS, Cloud Run
              Functions, GKE, and Google API Gateway
            </li>
            <li>
              • Built and deployed microservices architecture with REST and gRPC
              APIs
            </li>
            <li>
              • Established DevOps practices with Kubernetes, Docker, GitLab
              CI/CD pipelines, Terraform, and CloudFormation
            </li>
            <li>
              • Developed custom AI pipelines using open source models and
              integrated AWS SageMaker for model training
            </li>
            <li>
              • Implemented vector databases (Milvus) and traditional databases
              (Couchbase, CouchbaseLite, PostgreSQL)
            </li>
            <li>
              • Integrated AI technologies including Vortex AI Studio, Google
              Gemini APIs, and FaceNet for advanced photo recognition
            </li>
          </ul>
        </div>

        {/* Senior Software Engineer */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-gray-900">
              Senior Software Engineer
            </h4>
            <span className="text-sm text-gray-600">
              Jun 2022 - Nov 2023 | 1 year 5 months
            </span>
          </div>
          <div className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Tata Consultancy Services</span> |
            Full-time | Remote
          </div>
          <div className="text-xs text-gray-600 italic mb-3">
            Technologies: React, Next.js, TypeScript, Node.js, Go (Golang)
          </div>
          <ul className="text-sm text-gray-700 space-y-1 ml-4">
            <li>
              • Spearheaded the development of high-performance, scalable
              applications using Flutter, ensuring exceptional user experience
              on mobile platforms
            </li>
            <li>
              • Led the architecture and implementation of server-side and
              client-side projects with Next.js and Go, optimizing for speed,
              efficiency, and reliability
            </li>
            <li>
              • Drove the adoption of best practices in code quality, security,
              and maintainability, significantly reducing application downtime
            </li>
            <li>
              • Mentored junior developers in coding best practices, modern
              development tools, and frameworks
            </li>
          </ul>
        </div>

        {/* Software Engineer */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-gray-900">Software Engineer</h4>
            <span className="text-sm text-gray-600">
              Aug 2019 - Jun 2022 | 2 years 10 months
            </span>
          </div>
          <div className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Tata Consultancy Services</span> |
            Full-time | Remote
          </div>
          <div className="text-xs text-gray-600 italic mb-3">
            Technologies: Flutter, React, Next.js, Node.js, Go (Golang)
          </div>
          <ul className="text-sm text-gray-700 space-y-1 ml-4">
            <li>
              • Developed and maintained scalable applications utilizing
              Flutter, ensuring optimal performance across mobile platforms
            </li>
            <li>
              • Led the design and implementation of responsive web applications
              using React, TypeScript, and Next.js
            </li>
            <li>
              • Engineered server-side logic and APIs with Go & Node.js,
              enhancing application functionalities
            </li>
            <li>
              • Collaborated with cross-functional teams following agile
              methodologies and best coding practices
            </li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-400 pb-2 mb-4">
          EDUCATION
        </h3>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-gray-900">
              B.E: Computer Science and Engineering
            </h4>
            <span className="text-sm text-gray-600">
              Aug 2015 - Apr 2019 | 3 years 8 months
            </span>
          </div>
          <div className="text-sm text-gray-700">
            <span className="font-semibold">
              Maharaja Sayajirao University of Baroda
            </span>{" "}
            | Vadodara, India
          </div>
          <div className="text-sm text-gray-600">Aggregate Percentage: 72%</div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-gray-900">
              11-12th Science: Physics, Chemistry, Maths
            </h4>
            <span className="text-sm text-gray-600">
              May 2013 - Mar 2015 | 1 year 10 months
            </span>
          </div>
          <div className="text-sm text-gray-700">
            <span className="font-semibold">
              P. P. Savani Vidhya Bhavan, Surat
            </span>{" "}
            | Surat, India
          </div>
          <div className="text-sm text-gray-600">Aggregate Percentage: 83%</div>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 border-b border-gray-400 pb-2 mb-4">
          LANGUAGES
        </h3>
        <div className="flex flex-wrap gap-8 text-sm text-gray-700">
          <div>
            <span className="font-semibold text-gray-800">English</span> (Full
            Professional Proficiency)
          </div>
          <div>
            <span className="font-semibold text-gray-800">Hindi</span>{" "}
            (Professional Working Proficiency)
          </div>
          <div>
            <span className="font-semibold text-gray-800">Gujarati</span>{" "}
            (Native)
          </div>
        </div>
      </section>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          @page {
            size: A4;
            margin: 0.5in;
          }

          body {
            font-family: "Times New Roman", serif;
            font-size: 12px;
            line-height: 1.4;
            color: black;
          }

          * {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          .print\\:p-6 {
            padding: 1.5rem;
          }

          .print\\:max-w-none {
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
