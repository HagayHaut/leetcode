require 'fileutils'

def move_to_folder(dir_to_move, name_of_dir, difficulty)
    FileUtils.mv(dir_to_move, "#{__dir__}/#{difficulty}/#{name_of_dir}")
end

Dir.each_child(__dir__) do |child_dir_name|
    if child_dir_name.match /^\d+/ 
        cur_dir = "#{__dir__}/#{child_dir_name}"
        Dir.each_child(cur_dir) do |filename|
            if filename == 'README.md'
                first_line = File.open("#{cur_dir}/#{filename}", &:readline)
                difficulty = case first_line[first_line.index('h3') + 3]
                    when 'E' 'easy'
                    when 'M' 'medium'
                    else 'hard'
                    end
                move_to_folder(cur_dir, child_dir_name, difficulty)
            end
        end
    end
end
