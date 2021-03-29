var reportsWidget = {
	options: {
		containerSelector: ".reports",
		template:
			// prettier-ignore
			'{{#.}}' +
                '<article class="reports_item">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>'+
                    '</a>' +
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h3 class="reports_title">' +
                                '<a href="{{url}}" target="_blank">{{title}} <span> ({{file_size}} {{file_type}})</span></a>' +
                            '</h3>' +
                        '{{/documents}}' +
                    '</footer>' +
                '</article>' +
            '{{/.}}',
		emptyTemplate:
			'<div class="empty-array">Annual Reports have not yet been posted for this company.</div>',
	},

	init: function () {
		this.renderReports(reportData || []);
	},

	renderReports: function (reports) {
		var inst = this,
			options = inst.options;

		// Added a template just in case an empty array has been returned. To test, remove reportData array from init function
		if (reports.length <= 0) {
			$(options.containerSelector).html(Mustache.render(options.emptyTemplate));
		} else {
			$(options.containerSelector).html(
				Mustache.render(options.template, reports)
			);
		}
	},
};

reportsWidget.init();
