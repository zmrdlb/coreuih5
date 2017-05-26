module.exports = function(grunt) {
    grunt.file.setBase(__dirname);
    var packdir = '../tool/'; //package.json所在的目录
    var npmdir = '../tool/node_modules/'; //npm模块路径

	grunt.initConfig({
		pkg: grunt.file.readJSON(packdir+'package.json'),
        //coreui文件复制
		copy: {
			coreui: {
				expand: true,
				cwd: '../coreui/',
				src: ['js/widget/lib/**','img/**'],
				dest: '../dist/coreui/'
			}
		},
        //coreui css打包压缩
		cssmin: {
			minify: {
				expand: true,
				cwd: '../coreui/',
				src: ['css/page/*.css'],
				dest: '../dist/coreui/'
			}
		},
        //清空文件夹
        clean: {
		    options: {
		        force: true
		    },
            dist: ["../dist/coreui/*","!../dist/coreui/.git"]
		}
	});

    grunt.loadTasks(npmdir+'grunt-contrib-copy/tasks');
    grunt.loadTasks(npmdir+'grunt-contrib-cssmin/tasks');
    grunt.loadTasks(npmdir+'grunt-contrib-clean/tasks');

    /*******提测或上线执行*********/
    // 打包压缩
    // grunt -v --base=D:\mycoderoot\project-frame\tool\node_modules
	grunt.registerTask('default', 'default', function(){
        grunt.task.run(['clean','copy','cssmin']);
	});
};
