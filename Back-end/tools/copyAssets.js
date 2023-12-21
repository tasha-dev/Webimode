import shell from 'shelljs';

shell.mkdir( "-p", "dist")
// copy entire public folder
// shell.cp('-R', 'public', 'dist/public');
shell.cp('-R', 'resources', 'dist/resources');
