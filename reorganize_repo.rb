require 'fileutils'

# moves new solutions into difficulty folders
# and deletes auto generated NOTES.md files
Dir.each_child(__dir__) do |child_dir_name|
    if child_dir_name.match /^\d+/ 
        cur_dir = "#{__dir__}/#{child_dir_name}"
        difficulty = '' # to be a flag in outer scope
        has_notes = false
        Dir.each_child(cur_dir) do |filename|
            if filename == 'README.md'
                first_line = File.open("#{cur_dir}/#{filename}", &:readline)
                difficulty = case first_line[first_line.index('h3') + 3]
                    when 'E' 'easy'
                    when 'M' 'medium'
                    when 'H' 'hard'
                    else ''
                end
            elsif filename == 'NOTES.md'
                has_notes = true
            end
        end
        FileUtils.rm_f(["#{cur_dir}/NOTES.md"]) if has_notes
        FileUtils.mv(cur_dir, "#{__dir__}/#{difficulty}/#{child_dir_name}") if difficulty != ''
    end
end
