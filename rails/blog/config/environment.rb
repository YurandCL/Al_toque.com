# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

#Limpiamos las inflecciones existentes
#Inflector.inflections.clear

#Inflector.inflections do |inflect|
#	inflect.plural /([taeiou])([A-Z] |_|\$)/, '\1s\2'
#	inflect.plural /([rlnd])([A-Z]|_|$)/, '\1es\2'
#	inflect.singular /([taeiou])s([A-Z]|_|$)/, '\1\2'
 # 	inflect.singular /([rlnd])es([A-Z]|_|$)/, '\1\2'
#end
