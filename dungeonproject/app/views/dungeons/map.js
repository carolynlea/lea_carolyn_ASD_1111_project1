function(doc){
	if (doc._id.substr(0,8) === "dungeon:"){
		emit(doc._id.substr(8), {
			"location": doc.location,
			"date_found": doc.date_found,
			"occupant": doc.occupant,
			"dungeon_name": doc.dungeon_name
		});
	}
};