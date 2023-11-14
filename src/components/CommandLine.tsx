interface CommandLineProps {
  command: string;
}

const CommandLine = ({ command }: CommandLineProps) => {
  return (
    <div className="bg-gray-800 text-white font-mono text-sm p-3 rounded">
      {command.trim()}
    </div>
  );
};

export default CommandLine;
