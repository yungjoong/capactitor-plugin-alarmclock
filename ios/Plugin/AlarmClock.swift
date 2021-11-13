import Foundation

@objc public class AlarmClock: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
