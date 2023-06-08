require 'fileutils'

difficulties = %w(easy medium hard)

difficulties.each do |diff|
    Dir.each_child("#{__dir__}/#{diff}") do |solution|
        Dir.each_child("#{__dir__}/#{diff}/#{solution}") do |filename|
            if filename == 'NOTES.md'
                FileUtils.rm_f(["#{__dir__}/#{diff}/#{solution}/#{filename}"])
            end
        end
    end
end