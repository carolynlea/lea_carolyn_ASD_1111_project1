$(document).ready(function(){
	$.ajax({
		"url": "_view/dungeons",
		"dataType": "json",
		"success": function(data){
			$.each(data.rows, function(index, dungeon){
				var location = dungeon.value.location;
				var date_found = dungeon.value.date_found;
				var occupant = dungeon.value.occupant;
				var dungeon_name = dungeon.value.dungeon_name;
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
});