var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function ($scope, $mdSidenav, studentService) {
    var allStudents = [];


    $scope.subgroups = [1, 2];
    $scope.selectedsubgroups = [1, 2];
    $scope.isChosenOnly = false;
    //$scope.toggle = function (item, list) {
    //  var idx = list.indexOf(item);
    //  if (idx >-1) {
    //    list.splice(idx, 1);
    //  } else {
    //    list.push(item);
    //  }
    //};
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    $scope.toggleChosen = function (item) {
        $scope.isChosenOnly = !$scope.isChosenOnly;
    };
    //$scope.filterBySubgroup = function (student) {
    //  return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    //};

    $scope.filterByChosen = function (student) {
        if ($scope.isChosenOnly) {
            if (student.isChosenProject) {
                console.log(student);
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    };

    $scope.filterByData = function (student) {
        if (!student.websiteUrl || !student.codeSourceUrl) {
            return false;
        }
        return true;
    }

    $scope.selected = null;
    $scope.students = allStudents;
    $scope.selectStudent = selectStudent;
    $scope.toggleSidenav = toggleSidenav;

    loadStudents();

    function loadStudents() {
        studentService.loadAll()
            .then(function (students) {
                allStudents = students;
                $scope.students = [].concat(students);
                $scope.selected = $scope.students[0];
            })
    }

    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    function selectStudent(student) {
        $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
        $scope.toggleSidenav('left');
    }

}]);

app.service('studentService', ['$q', function ($q) {

    //! http://www.convertcsv.com/csv-to-json.htm
    // http://www.csvjson.com/csv2json
    var students = [
        {
            "name": "Andrii Tomkevych",
            "websiteUrl": "https://91atom.github.io/website/",
            "codeSourceUrl": "https://github.com/91atom",
            "cvUrl": "https://docs.google.com/document/d/1Si2ADopsogZkVvoXfPgAczcYUH7251VIn44dn56LxiI/edit",
            "photo": "images/students/tomkevych.jpg"
        },
        {
            "name": "Mykhailo Shtohryn",
            "websiteUrl": "https://mykhailo123.github.io/pub/",
            "codeSourceUrl": "https://github.com/Mykhailo123/pub",
            "cvUrl": "https://www.dropbox.com/s/cdfkvk8p2uuv9fa/Mykhailo_Shtohryn.docx?dl=0",
            "photo": "images/students/shtohryn.jpg"
        },
        {
            "name": "Oksana Bilovus",
            "websiteUrl": "https://oksanabilovus.github.io/my-site/",
            "codeSourceUrl": "https://github.com/oksanabilovus/my-site",
            "cvUrl": "",
            "photo": "images/students/bilovus.jpg"
        },
        {
            "name": "Pavlo Krychun",
            "websiteUrl": "https://tb4pb.github.io/mywebsite/",
            "codeSourceUrl": "https://github.com/TB4Pb/mywebsite",
            "cvUrl": "https://www.dropbox.com/s/djw4ayh4y78ygii/Pasha_Krychun_eng_2016.docx?dl=0",
            "photo": "images/students/krychun.jpg"
        },
        {
            "name": "Yuliia Shtohryn",
            "websiteUrl": "https://julkaiii.github.io/beauty/",
            "codeSourceUrl": "https://github.com/JulkaIII/beauty",
            "cvUrl": "https://www.dropbox.com/s/fgwyj31xyfd0n7b/Yuliia_Shtohryn.docx?dl=0",
            "photo": "images/students/shtohryny.jpg"
        },
        {
            "name": "Khrystyna Bilinska",
            "websiteUrl": "https://khrystynac9.github.io/ivano-frankivsk/",
            "codeSourceUrl": "https://github.com/khrystynac9/ivano-frankivsk",
            "cvUrl": "https://docs.google.com/document/d/15atLxGEH6tAgy__j3cfRjP8TCPtYQpo8lbUnHaK0R-I/edit?usp=sharing",
            "photo": "images/students/bilinska.jpg"
        },
        {
            "name": "Oleg Komarnytskyy",
            "websiteUrl": "https://7tyfly.github.io/protsykbrothers/",
            "codeSourceUrl": "https://github.com/7tyFly/protsykbrothers",
            "cvUrl": "",
            "photo": "images/students/komarnytskyy.jpg"
        },
        {
            "name": "Oleksandr Buriak",
            "websiteUrl": "https://vexx2016.github.io/website/",
            "codeSourceUrl": "https://github.com/vexx2016/website",
            "cvUrl": "https://www.dropbox.com/s/23632iasdcg6uvp/cv_buriak_oleksandr.doc?dl=0",
            "photo": "images/students/buriak.jpg"
        },
        {
            "name": "Yurii Zakharchuk",
            "websiteUrl": "https://giorgiolviv.github.io/lemberg-decor/",
            "codeSourceUrl": "https://github.com/GiorgioLviv/lemberg-decor",
            "cvUrl": "https://www.dropbox.com/s/eioac7o82fpr8an/YuriyCV%20%282%29.pdf?dl=0",
            "photo": "images/students/zakharchuk.jpg"
        },
        {
            "name": "Yaroslav Zin'",
            "websiteUrl": "https://yarzin.github.io/my-cv/",
            "codeSourceUrl": "https://github.com/yarzin/my-cv",
            "cvUrl": "https://docs.google.com/document/d/1wXX1m-WBGlXQqVAOVwRkzWymdWNm4_VCZ9rgQrYfRu8/edit?usp=sharing",
            "photo": "images/students/zin.jpg"
        },
        {
            "name": "Viktor Horodnychyy",
            "websiteUrl": "https://vic0803.github.io/final-project/",
            "codeSourceUrl": "https://github.com/vic0803/final-project",
            "cvUrl": "https://www.dropbox.com/s/iswg9a7fgp417db/CV_.docx?dl=0",
            "photo": "images/students/horodnychyy.jpg"
        },
        {
            "name": "Roman Mylenkyi",
            "websiteUrl": "https://romanmyl.github.io/g-1/",
            "codeSourceUrl": "https://github.com/romanmyl/g-1",
            "cvUrl": "https://www.dropbox.com/s/86l7gasb2sspfr8/RomanMylenkyiCV.docx?dl=0",
            "photo": "images/students/mylenkyi.jpg"
        },
        {
            "name": "Bugel Maksym",
            "websiteUrl": "https://bugelmax.github.io/svd/",
            "codeSourceUrl": "https://github.com/Bugelmax/svd",
            "cvUrl": "https://docs.google.com/document/d/1f5AHHpFOp_HtdNMs3P5fvy2NJV7SlbL7CdIRRQXvADk/edit?usp=sharing",
            "photo": "images/students/maksym.jpg"
        },
        {
            "name": "Marta Bobryk",
            "websiteUrl": "https://vert2016.github.io/hell/",
            "codeSourceUrl": "https://github.com/vert2016/hell",
            "cvUrl": "https://www.dropbox.com/s/fl261se9p4utdw6/CV_MARTA%20BOBRYK.pdf?dl=0",
            "photo": "images/students/bobryk.jpg"
        },
        {
            "name": "Markiyan Vaskiv",
            "websiteUrl": "https://masyan43.github.io/space/",
            "codeSourceUrl": "https://github.com/masyan43/space/tree/gh-pages",
            "cvUrl": "https://docs.google.com/document/d/1FeAKlaVkdyaStF7D_Kw6Cp-dXFz7e7tXaEKxmeh6MU8/edit?usp=sharing",
            "photo": "images/students/vaskiv.jpg"
        },
        {
            "name": "Dmytro Lubenchenko",
            "websiteUrl": "https://dlubenchenko.github.io/main_project/",
            "codeSourceUrl": "https://github.com/dlubenchenko/main_project",
            "cvUrl": "https://www.dropbox.com/s/vg0huiqigptsrk3/CV_dmytro_lubenchenko.docx?dl=0",
            "photo": "images/students/lubenchenko.jpg"
        },
        {
            "name": "Khrystyna Dyka",
            "websiteUrl": "https://khrystyna13.github.io/something-tasty/",
            "codeSourceUrl": "https://github.com/khrystyna13/something-tasty",
            "cvUrl": "https://www.dropbox.com/home?preview=CV_Khrystyna.Dyka.docx",
            "photo": "images/students/dyka.jpg"
        },
        {
            "name": "Khrystyna Levytska",
            "websiteUrl": "https://khrylev.github.io/my_project/",
            "codeSourceUrl": "https://github.com/khrylev/my_project",
            "cvUrl": "",
            "photo": "images/students/levytska.gif"
        },
        {
            "name": "Yuriy Senchyna",
            "websiteUrl": "https://777senya.github.io/yura_senchyna_website/",
            "codeSourceUrl": "https://github.com/777Senya/yura_senchyna_website",
            "cvUrl": "https://drive.google.com/open?id=0B55qgMa9xgbENng0QUI0SkZCdGM",
            "photo": "images/students/senchyna.jpg"
        },
        {
            "name": "Vasyl Kulynych",
            "websiteUrl": "https://ortex58.github.io/Header/",
            "codeSourceUrl": "https://github.com/Ortex58/Header",
            "cvUrl": "",
            "photo": "images/students/kulynych.jpg"
        },
        {
            "name": "Nataliia Kozova",
            "websiteUrl": "https://nataclever.github.io/travelblog/",
            "codeSourceUrl": "https://github.com/nataclever/travelblog.git",
            "cvUrl": "",
            "photo": "images/students/kozova.jpg"
        },
        {
            "name": "Nataliia Ometiukh",
            "websiteUrl": "https://natalifm.github.io/travel/",
            "codeSourceUrl": "https://github.com/natalifm/travel",
            "cvUrl": "",
            "photo": "images/students/ometiukh.jpg"
        },
        {
            "name": "Dmytro Fokshei",
            "websiteUrl": "https://savvyerfr.github.io/Utrend/",
            "codeSourceUrl": "https://github.com/SavvyerFr/Utrend",
            "cvUrl": "https://www.dropbox.com/s/6ro2ntjcp9uufqz/CV_Fokshei%20Softserve.docx?dl=0",
            "photo": "images/students/fokshei.jpg"
        },
        {
            "name": "Maryan Uniyat",
            "websiteUrl": "https://uniyat.github.io/final_progect/",
            "codeSourceUrl": "https://github.com/uniyat/final_progect",
            "cvUrl": "",
            "photo": "images/students/uniyat.jpg"
        },
        {
            "name": "Tetiana Khomko",
            "websiteUrl": "https://tetianakhomko.github.io/my-portfolio/",
            "codeSourceUrl": "https://github.com/TetianaKhomko/my-portfolio",
            "cvUrl": "https://docs.google.com/document/d/1gWzE9NBxyj5ofPQDA2q5FvJV_DaPdhNfyYHo46VIRrE/edit?usp=sharing",
            "photo": "images/students/khomko.jpg"
        }
    ];

    // Promise-based API
    return {
        loadAll: function () {
            // Simulate async nature of real remote calls
            return $q.when(students);
        }
    };
}]);
