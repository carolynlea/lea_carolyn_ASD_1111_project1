/*$(document).ready(function(){
	$.ajax({
		"url": "_view/dungeons",
		"dataType": "json",
		"success": function(data){
			$.each(data.rows, function(index, dungeon){
				var dungeon_name = dungeon.value.dungeon_name;
				var dungeon_type = dungeon.value.dungeon_type;
				var location = dungeon.value.location;
				var date_found = dungeon.value.date_found;
				var populated = dungeon.value.populated;
				var friendly = dungeon.value.friendly;
				var occupant = dungeon.value.occupant;
				var category = dungeon.value.category;
				var loot_rating = dungeon.value.loot_rating;
				var no_loot_here = dungeon.value.no_loot_here;
				var notes = dungeon.value.notes;
				
				$('#dungeonlist').append(
					$('<li>').append(
						$('<a>').attr("href", "#")
							.text(dungeon_name)
							
						)
				);
			});
			$('#dungeonlist').listview('refresh');
		}
	});
});*/

$('#home').live("pageshow", function(){
	$.couch.db("dungeonproject").view("dungeonproject/dungeons",{
		success: function(data) {
			$('#dungeonlist').empty();
			$.each(data.rows, function(index, value) {
				var item = (value.value || value.doc);
				$('#dungeonlist').append(
					$('<li>').append(
						$('<a>')
							.attr("href", "list.html?list=" + item.dungeon_type)
							.text(item.dungeon_name)
						)
					);
				});
				$('#dungeonlist').listview('refresh');
		}
	});
});

/*var urlVars = function () {
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for (var pair in urlPairs) {
		var keyValue = urlPairs[pair].split('=');
		var key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(keyValue[1]);
		urlValues[key] = value;
	}
	return urlValues;
};

$('#dlist').live("pageshow", function() {
	var dungeon = urlVars ()["dungeon"];
	$.couch.db("dungeonproject").view("dungeonproject/dungeon", {
		key: "dungeon:" + dungeon
	});
});
*/
