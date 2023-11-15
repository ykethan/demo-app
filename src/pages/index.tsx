/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CodeBlock from "@/components/CodeBlock";
import CommandLine from "@/components/CommandLine";

export default function HomePage() {
  // Define motion variants for the sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const imageUrls = [
    "/images/amplify-flow-opt-1920.webp",
    "/images/sandbox-opt-1920.webp",
    "/images/fullstack-opt-1920.webp",
  ];

  const sampleCode = `
    ├── amplify/
│   ├── auth/
│   │   └── resource.ts
│   ├── data/
│   │   └── resource.ts
│   ├── backend.ts
│   └── package.json
├── node_modules/
├── .gitignore
├── package-lock.json
├── package.json
└── tsconfig.json
  `;

  const createCommand = `npm create amplify`;
  const sandboxCommand = `npx amplify sandbox`;

  const dataexp = `
 import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Todo: a.model({
    title: a.string(),
    description: a.string(),
    priority: a.enum(['low', 'medium', 'high'])
  })
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema
});
 `;

  const authexp = `
 import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true
  }
});
 `;

  const dataFrontend = `
 import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '@/amplify/data/resource';

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

export default function HomePage() {
  const [todos, setTodos] = useState<Schema['Todo'][]>([]);

  async function listTodos() {
    const { data } = await client.models.Todo.list();
    setTodos(data);
  }

  useEffect(() => {
    listTodos();
  }, []);

  return (
    <main>
      <h1>Hello, Amplify 👋</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </main>
  );
}
 `;

  const customexp = `
 const bucketStack = backend.getStack("BucketStack");
const bucket = new s3.Bucket(bucketStack, "Bucket", {
  blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
});

// allow any authenticated user to read and write to the bucket
const authRole = backend.resources.auth.resources.authenticatedUserIamRole;
bucket.grantReadWrite(authRole);

// allow any guest (unauthenticated) user to read from the bucket
const unauthRole = backend.resources.auth.resources.unauthenticatedUserIamRole;
bucket.grantRead(unauthRole);
 `;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-purple-700 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Amplify code-first DX
        </h1>
        <Link
          href="/login"
          className="text-white bg-purple-300 hover:bg-purple-400 font-semibold py-2 px-6 rounded-full transition-colors duration-300 ease-in-out transform hover:scale-105"
        >
          Login
        </Link>
      </header>

      <motion.main
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1,
          when: "beforeChildren",
          staggerChildren: 0.3,
        }}
        className="flex-grow container mx-auto p-4 space-y-8"
      >
        <motion.section
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Introducing AWS Amplify Gen 2
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            AWS Amplify Gen 2 provides a TypeScript-based, code-first developer
            experience, introducing a new way to define backends through an
            infrastructure-from-code paradigm.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            It leverages the{" "}
            <strong>AWS Cloud Development Kit (AWS CDK)</strong> to accelerate
            cloud development, allowing you to model your applications in
            TypeScript.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The AWS CDK transforms cloud infrastructure management, making
            development rapid and iterative with a method known as hotswapping.
            As you make changes, the CDK automatically updates your deployment.
            It assesses whether to apply changes in-place or to initiate a full
            CloudFormation deployment, significantly enhancing development speed
            and efficiency.
          </p>
          <br />
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            For documentation, please refer to the{" "}
            <a
              href="https://next-docs.amplify.aws/gen2/how-amplify-works/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
              aria-label="AWS Amplify Gen 2 documentation"
            >
              AWS Amplify Gen 2 documentation
            </a>
            .
          </p>
        </motion.section>
        {imageUrls[0] && (
          <div className="flex justify-center my-8">
            <Image
              src={imageUrls[0]}
              alt="Description of Image 1"
              width={1320}
              height={1080}
            />
          </div>
        )}

        <motion.section
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Capabilities
          </h3>
          <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed">
            <li>
              Provision backend infrastructure with TypeScript, reducing tooling
              overhead.
            </li>
            <li>Gain strict typing and IntelliSense to catch errors early.</li>
            <li>
              Enjoy faster local development with cloud sandbox environments.
            </li>
            <li>
              Utilize fullstack Git-based environments for easy feature testing
              and deployment.
            </li>
            <li>
              Manage all branches and settings in the unified Amplify console.
            </li>
          </ul>
        </motion.section>

        {imageUrls[1] && (
          <div className="flex justify-center my-8">
            <Image
              src={imageUrls[1]}
              alt="Description of Image 2"
              width={1320}
              height={1080}
            />
          </div>
        )}

        {imageUrls[2] && (
          <div className="flex justify-center my-8">
            <Image
              src={imageUrls[2]}
              alt="Description of Image 2"
              width={1320}
              height={1080}
            />
          </div>
        )}

        <motion.section
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Build an App with Fullstack Capabilities
          </h3>
          <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed">
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                TypeScript-first Data library for GraphQL API and NoSQL
                databases.
              </li>
              <li>Auth and Data configuration streamlined with TypeScript.</li>
              <li>UI component library and Figma-to-code generation.</li>
            </ul>
          </ul>
        </motion.section>

        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Structure and Commands</h1>

          <h2 className="text-xl font-bold mt-6 mb-2">
            Creating a Amplify Gen 2 App:
          </h2>
          <CommandLine command={createCommand} />
          <br />
          <h2 className="text-xl font-bold mb-2">Project Structure:</h2>
          <CodeBlock language="text" value={sampleCode} />
        </div>

        <h2 className="text-xl font-bold mb-2">Running Sandbox:</h2>
        <CommandLine command={sandboxCommand} />

        <h2 className="text-xl font-bold mb-2">Data and Auth configuration:</h2>
        <CodeBlock language="javascript" value={dataexp} />
        <CodeBlock language="javascript" value={authexp} />

        <h2 className="text-xl font-bold mb-2">
          Acessing Data on your frontend:
        </h2>
        <CodeBlock language="javascript" value={dataFrontend} />
        <motion.section
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Connect to AWS Beyond Amplify
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Extend Amplify-generated resources easily with AWS CDK, integrate
            with existing AWS resources, and incrementally adopt Amplify's
            capabilities into your workflows.
          </p>
          <br />
          <h2 className="text-xl font-bold mb-2">
            Creating a custom resource:
          </h2>

          <CodeBlock language="javascript" value={customexp} />
        </motion.section>
      </motion.main>

      <motion.main className="container mx-auto p-4">
        <p className="text-2xl md:text-3xl font-bold text-gray-800">
          Unified Console
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          All branches can be managed in our new Amplify console. The Gen 2
          Amplify console consolidates the console experiences across Studio and
          Hosting, providing a single place for you to manage your builds,
          hosting settings (for example, custom domains), deployed resources
          (for example, data browser or user management), and environment
          variables and secrets. Even though you can access deployed resources
          directly in other AWS service consoles, the Amplify console offers you
          a direct experience for core categories like Data and Auth.
        </p>
        <div className="my-8 flex justify-center">
          <div className="w-full max-w-5xl">
            {" "}
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              {" "}
              <video
                className="absolute top-0 left-0 w-full h-full"
                controls
                src="/console.mp4"
              />
            </div>
          </div>
        </div>
      </motion.main>

      <footer className="bg-purple-700 p-4 mt-auto">
        <div className="text-center text-sm text-white">
          © {new Date().getFullYear()} Amplify Gen 2
        </div>
      </footer>
    </div>
  );
}
