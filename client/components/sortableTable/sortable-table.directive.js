'use strict';

angular
    .module(window.APP.modules.main)
    .directive('sortableTable', sortableTable);

sortableTable.$inject = [];
function sortableTable() {
    return {
        restrict: 'A',
        scope: {
            ngModel: '=',
            sortAction: '='
        },
        link: linkFunc
    };

    function linkFunc(scope, elem, attrs) {
        // add sortable class to table
        elem.addClass('sortable');
        angular.forEach(elem.find('th[sort-by]'), function(col) {
            var self = angular.element(col);

            // add sortable class to col
            self.addClass('sortable');
            // add asc or desc to default col
            if (self.attr('sort-by') === scope.ngModel) {
                self.addClass('asc');
            } else if (self.attr('sort-by') === '-' + scope.ngModel) {
                self.addClass('desc');
            }

            // bind click event to col
            self.on('click', function() {
                if (self.hasClass('asc')) {
                    resetCols();
                    self.addClass('desc');
                    scope.sortAction('-' + self.attr('sort-by'));
                } else {
                    resetCols();
                    self.addClass('asc');
                    scope.sortAction(self.attr('sort-by'));
                }
            });

            self.on('$destroy', function() {
                self.off('click');
            });
        });

        // remove asc & desc of all cols
        function resetCols() {
            angular.forEach(elem.find('th[sort-by]'), function(col) {
                angular.element(col).removeClass('asc').removeClass('desc');
            });
        }
    }
}