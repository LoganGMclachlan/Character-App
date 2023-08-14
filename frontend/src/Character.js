export default class Character{
    // creates a new character with default stats
    constructor(name){
        this.id=crypto.randomUUID()
        this.char_name=name
        this.char_level=1
        this.char_class=""
        this.background=""
        
        this.strength=0
        this.dexterity=0
        this.constitution=0
        this.inteligence=0
        this.wisdom=0
        this.charisma=0

        this.acrobatics=0
        this.animalHandling=0
        this.arcana=0
        this.athletics=0
        this.deception=0
        this.history=0
        this.insight=0
        this.intimidation=0
        this.investigation=0
        this.medicine=0
        this.nature=0
        this.perception=0
        this.performance=0
        this.persuation=0
        this.religion=0
        this.sleight_of_hand=0
        this.stealth=0
        this.survival=0
        
        this.max_hp=10
        this.current_hp=10
        this.temp_hp=0
        this.hit_dice_type="d8"
        this.hit_dice_count=1

        this.proficiency_bonus=2
        this.ac=10
        this.speed=30
        this.initiative=0

        this.deathsave_success=0
        this.deathsavez_fail=0
        
        this.inventory=""
        this.proficiences="common,dagger"
        
        this.actions=[{
            id:crypto.randomUUID,
            title:"Unarmed Strike",
            bonusOrDC:2,
            range:"5ft",
            damage:1,
            notes:""
        }]
        
        this.features=[{
            id:crypto.randomUUID,
            title:"Feature Title",
            description:"Add all your new features here"
        }]
    }

    setAction(actions){
        this.actions=actions
    }

    setFeatures(features){
        this.features=this.features
    }

    // sets all character properties
    setCharacter(char){
        this.id=char.id
        this.char_name=char.char_name
        this.char_level=char.char_level
        this.char_class=char.char_class
        this.background=char.background
        
        this.strength=char.strength
        this.dexterity=char.dexterity
        this.constitution=char.constitution
        this.inteligence=char.inteligence
        this.wisdom=char.wisdom
        this.charisma=char.charisma

        this.acrobatics=char.acrobatics
        this.animalHandling=char.animalHandling
        this.arcana=char.arcana
        this.athletics=char.athletics
        this.deception=char.deception
        this.history=char.history
        this.insight=char.insight
        this.intimidation=char.intimidation
        this.investigation=char.investigation
        this.medicine=char.medicine
        this.nature=char.nature
        this.perception=char.perception
        this.performance=char.performance
        this.persuation=char.persuation
        this.religion=char.religion
        this.sleigh_of_hand=char.sleigh_of_hand
        this.stealth=char.stealth
        this.survival=char.survival
        
        this.max_hp=char.max_hp
        this.current_hp=char.current_hp
        this.temp_hp=char.temp_hp
        this.hit_dice_type=char.hit_dice_type
        this.hit_dice_count=char.hit_dice_count

        this.proficiency_bonus=char.proficiency_bonus
        this.ac=char.ac
        this.speed=char.speed
        this.initiative=char.initiative

        this.deathsave_success=char.deathsave_success
        this.deathsave_fail=char.deathsave_fail
        
        this.inventory=char.inventory
        this.proficiences=char.proficiences
    }

    /* method to return a string query that will insert
    /  the character into the db */
    getInsertQuery(userId){
        return `INSERT INTO Characters VALUES (` +
        `'${this.id}','${this.char_name}','${this.char_class}',${this.char_level},'${this.background}',` +
        `${this.strength},${this.dexterity},${this.constitution},${this.inteligence},${this.wisdom},${this.charisma},` +
        `${this.acrobatics},${this.animalHandling},${this.arcana},${this.athletics},` +
        `${this.deception},${this.history},${this.insight},${this.intimidation},` +
        `${this.investigation},${this.medicine},${this.nature},${this.perception},` +
        `${this.performance},${this.persuation},${this.religion},${this.sleight_of_hand},` +
        `${this.stealth},${this.survival},` +
        `${this.max_hp},${this.current_hp},${this.temp_hp},` +
        `'${this.hit_dice_type}',${this.hit_dice_count},${this.proficiency_bonus},${this.ac},` +
        `${this.speed},${this.initiative},${this.deathsave_success},${this.deathsave_fail},` +
        `'${this.inventory}','${this.proficiences}','${userId}')`
    }
}