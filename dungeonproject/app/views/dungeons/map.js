function(doc){

		emit(doc._id.substr(8), {
			"id": doc._id,
			"dungeon_name": doc.dungeon_name,
			"dungeon_type": doc.dungeon_type,
			"location": doc.location,
			"date_found": doc.date_found,
			"populated": doc.populated,
			"friendly": doc.friendly,
			"occupant": doc.occupant,
			"category": doc.category,
			"loot_rating": doc.loot_rating,
			"no_loot_here": doc.no_loot_here,
			"notes": doc.notes,
			"type": doc.type
		});

};