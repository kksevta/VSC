module.exports = function (grunt) {
    grunt.initConfig({
        shell: {
            buildtsc: {
                command: 'tsc'
            },
            copytoapache: {
                command: 'cp -r /home/kuldeep/Desktop/VisualStudioCode/VSC/build/. /var/www/test.kuldeep.com/public_html/'
            }
        },
        watch: {
            files: ['src/**', 'build/**'],
            tasks: ['shell:buildtsc', 'shell:copytoapache'],
            options: {
                spawn: false,
                livereload: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['shell:buildtsc','shell:copytoapache', 'watch']);
};