module.exports = function (grunt) {
    grunt.initConfig({
        shell: {
            buildtsc: {
                command: 'tsc'
            },
            copytoapache: {
                command: 'cp -r /home/kuldeepk/Desktop/testingVS/build/. /var/www/test.kuldeep.com/public_html/'
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
    grunt.registerTask('default', ['shell', 'watch']);
};