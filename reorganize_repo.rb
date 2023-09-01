require 'fileutils'

# moves new solutions into difficulty folders
# and deletes auto generated NOTES.md files
Dir.each_child(__dir__) do |child_dir_name|
    if child_dir_name.match /^\d+/ 
        cur_dir = "#{__dir__}/#{child_dir_name}"
        difficulty = '' # serves as a flag in outer scope
        has_notes = false
        Dir.each_child(cur_dir) do |filename|
            if filename == 'README.md'
                first_line = File.open("#{cur_dir}/#{filename}", &:readline)
                difficulty_first_letter = first_line[first_line.index('h3') + 3]
                difficulty = case difficulty_first_letter
                    when 'E' then 'easy'
                    when 'M' then 'medium'
                    when 'H' then 'hard'
                    else ''
                end
            end 
            has_notes = true if filename == 'NOTES.md'
        end
        if difficulty != ""
            puts "Moving #{child_dir_name} to #{difficulty} folder..."
            FileUtils.mv(cur_dir, "#{__dir__}/#{difficulty}/#{child_dir_name}") if difficulty != ''
        else
            puts "Cannot determine problem difficulty for #{child_dir_name}"
        end
        if has_notes
            puts "Deleting empty NOTES.md file for #{child_dir_name}"
            FileUtils.rm_f(["#{cur_dir}/NOTES.md"]) 
        end
    end
end
